import { Outlet } from "remix";
import { ActionFunction } from "remix";

export let action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	const players = form.get("players");
	if (typeof players !== "string") {
		throw new Error("players is not a string");
	}

	const playersArr = players.split(",");
	console.log(playersArr);
	return Promise.resolve(true);
};

function Dashboard() {
	return (
		<>
			<div className="body-container">
				<Outlet />
			</div>
		</>
	);
}

export default Dashboard;
