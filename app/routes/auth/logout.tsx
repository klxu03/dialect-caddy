import { redirect } from "remix";
import { logout } from "~/utils/session.server";

export const action = async ({ request }: any) => {
	// Log this person out of the session
	console.log("in the action function logout");
	return logout(request);
};

// export const loader = async () => {
// 	return redirect("/");
// };
