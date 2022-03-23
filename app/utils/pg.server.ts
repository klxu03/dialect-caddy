import { Client } from "pg";

const serverURL =
	"postgres://xfymweficmgrrq:243e67814506f5877d63334ae0b18aaae65c12a2965dfc4ffaae1117b0a704f1@ec2-52-44-209-165.compute-1.amazonaws.com:5432/d7rr7u4v74vvad";

const client = new Client({
	connectionString: serverURL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

export { client };
