import { Outlet } from "remix";

function Auth() {
	return (
		<>
			<div className="body-container">
				<Outlet />
			</div>
		</>
	);
}

export default Auth;
