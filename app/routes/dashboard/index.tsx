import { useEffect, useState } from "react";
import dashboardStyles from "~/styles/dashboard/styles.css";
import { useLoaderData } from "remix";

import {
	getUser,
	getRoundsFromUser,
	getUsernameFromUserId,
} from "~/utils/session.server";

// Search
import { Search } from "~/components/Search";
import searchStylesUrl from "~/styles/components/search.css";
export const links = () => [
	{
		rel: "stylesheet",
		href: dashboardStyles,
	},
	{
		rel: "stylesheet",
		href: searchStylesUrl,
	},
];

export const loader = async ({ request, params }: any) => {
	let user = await getUser(request);
	if (!user) {
		user = {
			id: null,
		};
	}

	const roundsData = await getRoundsFromUser(user.id);
	console.log("roundsData", roundsData);

	// Change each round in roundsData from having
	let roundData: any = [];
	for (let round of roundsData) {
		const ownerName = await getUsernameFromUserId(round.ownerId);
		const newRound = {
			...round,
			owner: ownerName,
		};
		roundData = [...roundData, newRound];
	}
	console.log("roundData", roundData);

	const data = {
		user,
		roundData,
	};
	return data;
};

const Row = ({ round }: any) => {
	const [active, setActive] = useState<Boolean>(false);

	return (
		<tr>
			<td>
				<input type="checkbox" />
			</td>
			<td>{round.roundTime}</td>
			<td>{round.owner}</td>
			<td>{round.usersId.length} is wrong since this is players + caddies</td>
			<td>{round.usersId.length} is wrong since this is players + caddies</td>
			<td
				onClick={() => {
					setActive(!active);
				}}>
				{active ? (
					<div className="dropdown">
						<div className="dropdown-content">
							<button
								onClick={() => {
									setActive(false);
									console.log("active", active);
								}}>
								Close
							</button>
							<p>Delete</p>
							<p>View</p>
							<p>Edit</p>
						</div>
					</div>
				) : (
					<button>...</button>
				)}
			</td>
		</tr>
	);
};

const AddRound = () => {
	const [date, setDate] = useState<string>("");

	const [players, setPlayers] = useState<string[]>([]);
	const [player, setPlayer] = useState<string>("");

	const [caddies, setCaddies] = useState<string[]>([]);
	const [caddy, setCaddy] = useState<string>("");
	const [numCaddies, setNumCaddies] = useState<number>(0);

	return (
		<form method="post" action="/dashboard">
			<label htmlFor="date">Date</label>
			<input
				type="datetime-local"
				onChange={(e) => {
					setDate(e.target.value);
				}}
			/>

			<br />
			<br />

			<label htmlFor="player">Search Players </label>
			<input
				type="text"
				name="Add Players"
				value={player}
				onChange={(event) => {
					setPlayer(event.target.value);
				}}
			/>

			<Search />

			<button
				onClick={(e) => {
					e.preventDefault();
					setPlayers([...players, player]);
					setPlayer("");
				}}>
				Add
			</button>

			<div style={{ display: "flex" }}>
				<h3>Currently Added Players: </h3>

				{players.map((player) => {
					return (
						<div key={player} style={{ display: "flex" }}>
							<p>({player})</p>
							<button
								onClick={(e) => {
									e.preventDefault();
									setPlayers(
										players.filter((currPlayer) => currPlayer !== player)
									);
								}}>
								X
							</button>
						</div>
					);
				})}
			</div>

			<br />
			<br />

			<label htmlFor="caddy">Search Caddies </label>
			<input
				type="text"
				name="Add Caddies"
				value={caddy}
				onChange={(event) => {
					setCaddy(event.target.value);
				}}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					if (caddies.length + 1 <= numCaddies) {
						setCaddies([...caddies, caddy]);
						setCaddy("");
					}
				}}>
				Add
			</button>

			<br />
			<div style={{ display: "flex" }}>
				<h3>How many caddies?</h3>
				<button
					onClick={(e) => {
						e.preventDefault();
						setNumCaddies(Math.max(numCaddies - 1, caddies.length));
					}}>
					-
				</button>
				<p>{numCaddies}</p>
				<button
					onClick={(e) => {
						e.preventDefault();
						setNumCaddies(numCaddies + 1);
					}}>
					+
				</button>
			</div>

			<div style={{ display: "flex" }}>
				<h3>Currently Added Caddies: </h3>

				{caddies.map((caddy) => {
					return (
						<div key={caddy} style={{ display: "flex" }}>
							<p>({caddy})</p>
							<button
								onClick={(e) => {
									e.preventDefault();
									setCaddies(
										caddies.filter((currCaddy) => currCaddy !== caddy)
									);
								}}>
								X
							</button>
						</div>
					);
				})}
			</div>

			<br />
			<br />

			<input type="hidden" name="date" value={date} />
			<input type="hidden" name="players" value={players} />
			<input type="hidden" name="caddies" value={caddies} />
			<button type="submit">Save Round</button>
		</form>
	);
};

function Dashboard() {
	const data = useLoaderData();
	useEffect(() => {
		console.log(data);
	}, []);
	const [modalActive, setModalActive] = useState<boolean>(false);

	return (
		<>
			<div className="page-header">
				<h1>Home {data.user.username}</h1>
				<button
					onClick={() => {
						setModalActive(!modalActive);
					}}>
					{modalActive ? "Close Round" : "Add Round"}
				</button>
			</div>

			<div>
				{modalActive ? (
					<AddRound />
				) : (
					<table>
						<thead>
							<tr>
								<th>
									<input type="checkbox" />
								</th>
								<th>Date</th>
								<th>Owner</th>
								<th># Players</th>
								<th># Caddies</th>
								<th>R</th>
							</tr>
						</thead>
						<tbody>
							{data.roundData.map((round: any) => {
								return <Row key={round.id} round={round} />;
							})}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
}

export default Dashboard;
