import { db } from "~/utils/db.server";
import { client } from "~/utils/pg.server";

export async function loader({ params, request }: any) {
	// const url = new URL(request.url);
	// const param = url.searchParams.get("users");
	const type = params.type;
	const userTypedIn = params.user;
	console.log(type, userTypedIn);

	try {
		let users = await db.user.findMany({
			where: {
				type: type,
				// username: `${userTypedIn}@%`,
			},
		});

		users = users.filter((user) => {
			let length = userTypedIn.length;
			return user.username.substring(0, length) == userTypedIn;
		});

		let usernames: string[] = [];
		for (let user of users) {
			usernames.push(user.username);
		}

		// const users = await client.query(`
		// SELECT * FROM user
		// WHERE username like "${userTypedIn}%"
		// `);
		console.log(usernames);
		return usernames;
	} catch (err) {
		console.log(err);
	}
}
