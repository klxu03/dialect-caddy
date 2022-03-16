import bcrypt from 'bcrypt';
import { db } from './db.server';

import { createCookieSessionStorage, redirect } from 'remix';

type UserInfo = {
  username: string;
  password: string;
};

// Login user
export async function login({ username, password }: UserInfo) {
  const user = await db.user.findUnique({
    where: {
      username,
    },
  });

  // If there doesn't exist such a user
  if (!user) return null;

  // Now check the password
  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isCorrectPassword) return null;

  return user;
}

// Register User
export async function register({ username, password }: UserInfo) {
  const passwordHash = await bcrypt.hash(password, 10);

  return db.user.create({
    data: {
      username,
      passwordHash,
      type: 'player',
    },
  });
}

// Create session storage
const storage = createCookieSessionStorage({
  cookie: {
    name: 'dialect-caddy_session',
    secure: process.env.NODE_ENV === 'production',
    secrets: ['secret'],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 60, // 60 secs per min * 60 mins per hour * 24 hours per day* 60 days
    httpOnly: true,
  },
});

// Create session
export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
}

// Get user session
export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'));
}

// Get logged in user
export async function getUser(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');

  if (!userId || typeof userId !== 'string') {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

// Log out user and destroy session
export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get('Cookie'));

  return redirect('/auth/logout', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
}
