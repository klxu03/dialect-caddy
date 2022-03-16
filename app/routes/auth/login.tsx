import { useActionData, json } from 'remix';
import { db } from '~/routes/utils/db.server';
import {
  login,
  register,
  createUserSession,
} from '~/routes/utils/session.server';

import { useEffect } from 'react';

export const action = async ({ request }: any) => {
  const form = await request.formData();
  const loginType = form.get('loginType');
  const username = form.get('username');
  const password = form.get('password');

  const fields = {
    loginType,
    username,
    password,
  };

  switch (loginType) {
    case 'login': {
      // Find user
      const user = await login({ username, password });

      // Check to see if user correctly logged in
      if (!user) {
        return badRequest({
          fields,
          fieldErrors: { username: 'Invalid credentials' },
        });
      }

      // Create user session
      return createUserSession(user.id, '/dashboard');
    }

    case 'register': {
      // Check if user exists
      const userExists = await db.user.findFirst({
        where: {
          username,
        },
      });

      if (userExists) {
        return badRequest({
          fields,
          fieldErrors: {
            username: `User ${username} already exists`,
          },
        });
      }

      // Create user
      const user = await register({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldError: 'Something went wrong trying to create the user',
        });
      }

      return createUserSession(user.id, '/dashboard');
    }
  }
};

const badRequest = (data: any) => {
  return json(data, { status: 400 });
};

function Login() {
  const actionData = useActionData();

  useEffect(() => {
    console.log(actionData);
  }, [actionData]);

  return (
    <div>
      <h1>Login</h1>
      <form method="post">
        <fieldset>
          <legend>Login or Register</legend>
          <label>
            <input
              type="radio"
              name="loginType"
              value="login"
              defaultChecked={true}
            />
            Login
          </label>
          <label>
            <input type="radio" name="loginType" value="register" />
            Register
          </label>
        </fieldset>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
