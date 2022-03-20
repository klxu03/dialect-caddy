import { Outlet } from "remix";
import { ActionFunction } from "remix";

import { getUser, getUserFromUsername } from "~/utils/session.server";
import { db } from "~/utils/db.server";

export let action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	const user = await getUser(request);
	if (typeof user === undefined || typeof user === null) {
		throw new Error("user is not logged in for owner");
	}

	const date = form.get("date")?.toString();
	// console.log(date); // 2022-03-23T01:59
	const roundTime = new Date(date);
	console.log("roundTime", roundTime);

	const players = form.get("players");
	if (typeof players !== "string") {
		throw new Error("players is not a string");
	}

	const playersArr = players.split(",");
	console.log("playersArr", playersArr);
	let usersId: string[] = [user.id];
	for (let player of playersArr) {
		// If it's an empty string and the split just leads an empty ""
		if (player == "") continue;

		console.log("player for loop", player);
		const newPlayer = await getUserFromUsername(player);
		console.log("newPlayer player for loop", newPlayer);
		const newId = newPlayer.id;
		// if (newId !== "string") {
		// 	throw new Error("a player could not be added for incorrect username");
		// }
		usersId = [...usersId, newId];
	}

	const caddies = form.get("caddies");
	if (typeof caddies !== "string") {
		throw new Error("caddies is not a string");
	}
	const caddiesArr = caddies.split(",");
	console.log("caddiesArr", caddiesArr);
	for (let caddy of caddiesArr) {
		// If it's an empty string and the split just leads an empty ""
		if (caddy == "") continue;

		const newCaddy = await getUserFromUsername(caddy);
		console.log("newCaddy caddy for loop", newCaddy);
		const newId = newCaddy.id; // Could put ? after newCaddy
		// if (newId !== "string") {
		// 	throw new Error("a player could not be added for incorrect username");
		// }
		usersId = [...usersId, newId];
	}
	console.log("usersId", usersId);

	const round = await db.round.create({
		data: {
			ownerId: user.id,
			roundTime,
			usersId,
		},
	});
	console.log("round created: ", round);

	for (let user of usersId) {
		const userOnRound = await db.userOnRound.create({
			data: {
				userId: user,
				roundId: round.id,
			},
		});

		console.log("userOnRound: ", userOnRound);
	}

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
