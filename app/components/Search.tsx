import stylesUrl from "~/styles/components/search.css";
export const links = () => [
	{
		rel: "stylesheet",
		href: stylesUrl,
	},
];

const choseOption = (option: string) => {
	console.log("chose ", option);
};

export function Search() {
	return (
		<>
			<div className="dropdown dropdown-content show">
				<p onClick={choseOption("About")}>About</p>
				<p>Blog</p>
				<p>Base</p>
				<p>Contact</p>
				<a href="#tools">Tools</a>
			</div>
		</>
	);
}
