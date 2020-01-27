/*
* Navbar
*/

function Navbar(attr) {
	return elem(
		"div",
		{
			background: "#555",
			color: "#888",
			padding: "0.2rem",
			textAlign: "left",
		},
		{
			id: "nav"
		}, 
		"React Kinds"
	)
}