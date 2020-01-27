/*
* Button
*/

function Button(attr) {
	// attribute components default values
	if(!attr.labelButton) attr.labelButton = "Click Me"
	
	return elem(
		"button",
		{
			padding: "0.65rem",
			marginTop: "0.4rem",
			color: "gray",
			border: "1px solid gray",
			borderRadius: "0.5rem",
			background: "#fff",
			fontSize: "large",
			cursor: "pointer",
		},
		{
			id: "btn1",
			click: btn1Click,
		}, 
		attr.labelButton
	)
}

function btn1Click(e) {
	console.log("Clicked!")
	setAttr(Label({labelContent: "i-i-i!!!"}), 0.6)
}