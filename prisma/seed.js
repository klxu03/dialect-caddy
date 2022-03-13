const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
	// Create some users in our database
	await Promise.all(
		getUsers.map((user) => {
			const data = {
				username: user.username,
				// Original Password = password
				passwordHash:
					"$2a$10$PPgi0f4qWdaQh.Wb4.qIweRnY25U63BSW6t/h8mvGEYYxqx0YrX3e",
				type: user.player,
			};
			return prisma.user.create({ data });
		})
	);
}

seed();

function getUsers() {
	return [
		{
			username: "player1",
			type: "player",
		},
		{
			username: "player2",
			type: "player",
		},
		{
			username: "player3",
			type: "player",
		},
		{
			username: "caddy1",
			type: "caddy",
		},
		{
			username: "caddy2",
			type: "caddy",
		},
		{
			username: "caddy3",
			type: "caddy",
		},
		{
			username: "admin1",
			type: "admin",
		},
	];
}
