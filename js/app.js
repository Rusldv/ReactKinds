var attr = {
	labelContent: "Hello React Kinds",
	labelButton: "This button",
}

rend(document.getElementById("root"), App(attr))

function App(attr) {
	return elem(
		"div", 
		{
			fontFamily: "segoe ui",
			color: "gray",
			textAlign: "center",
		},
		{
			id: "app",
		},
		[
			Navbar(attr),
			Pict(attr),
			Label(attr),
			Button(attr),
		]
	)
}