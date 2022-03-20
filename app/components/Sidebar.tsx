import { useState } from "react";
import { Link, useLoaderData } from "remix";
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }: any) => {
	const user = getUser(request);
	console.log("user in sidebar", user);
	return user;
};

export function Sidebar() {
	const data = useLoaderData();
	console.log(data);
	const [active, setActive] = useState<string>("home");

	return (
		<div className="sidebar-container">
			<div className="sidebar-wrapper">
				This is a sidebar
				<div className="menu-container">
					<div
						className={
							"menu-item " + (active == "home" ? "menu-item-active" : "")
						}
						onClick={() => setActive("home")}>
						Home
					</div>
					<div
						className={
							"menu-item " + (active == "caddies" && "menu-item-active")
						}
						onClick={() => setActive("caddies")}>
						Caddies
					</div>
					<div
						className={"menu-item " + (active == "help" && "menu-item-active")}
						onClick={() => setActive("help")}>
						Help
					</div>
				</div>
				<div>
					<form action="/auth/logout" method="POST">
						<button type="submit">Logout</button>
					</form>
					<Link to="/auth/login">Log In</Link>
					{/* {data ? (
						<form action="/auth/logout" method="POST">
							<button type="submit">Logout</button>
						</form>
					) : (
						<Link to="/auth/login">Log In</Link>
					)} */}
				</div>
			</div>
		</div>
	);
}
