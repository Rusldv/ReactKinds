/*
* Label
*/

function Label(attr) {
	return elem(
		"h1",
		{
			padding: "0.2rem",
			marginTop: "0.4rem",
		},
		{
			id: "lbl1",
		}, 
		attr.labelContent
	)
}