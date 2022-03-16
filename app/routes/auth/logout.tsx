import { redirect } from 'remix';
import { logout } from '~/routes/utils/session.server';

export const action = async ({ request }: any) => {
  // Log this person out of the session
  return logout(request);
};

export const loader = async () => {
  return redirect('/');
};
