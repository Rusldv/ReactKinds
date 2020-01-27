/**
* bots framework library
*
*
*/

// Для каждого создаваемого элемента в attr необходимо указывать id иначе он не будет обновляться через setAttr

function elem(elt, style, attr, item) {
	//if(elt) console.log("yes")
	//else console.log("no")
	//console.log(elt)
	/*element */
	if(elt) {
		// создается узел, как и теги в браузре (например <div></div>
		var el = document.createElement(elt);
		//console.log(el)
	} else {
		console.log("elt fail")
		return 
	}
	/* style */
	if(style) {
		//console.log(typeof(style))
		if(typeof(style) == "object") {
			//console.log(style)
			for(var itm in style) {
				//console.log(itm, style[itm])
				el.style[itm] = style[itm]
			}
		} else {
			console.log("style is not object type")
		}
	} else {
		console.log("style fail")
	}
	/* attr */
	if(attr) {
		//console.log(typeof(attr))
		if(typeof(attr) == "object") {
			//console.log(style)
			for(var itm in attr) {
				//console.log(itm, attr[itm])
				//console.log(typeof(attr[itm]))
				if(typeof(attr[itm]) == "function") {
					//console.log("Add listener for onclick")
					el.addEventListener(itm, attr[itm])
				} else {
					// standart
					el[itm] = attr[itm]
				}
			}
		} else {
			console.log("attr is not object type")
		}
	} else {
		console.log("attr fail (add ID for element)")
	}
	/* item */
	if(item) {
		//console.log(typeof(item))
		if(typeof(item) == "string") {
			//console.log(item)
			var text = document.createTextNode(item)
			el.appendChild(text)
			//console.log(el)
		} else if(typeof(item) == "object") {
			//console.log("object", item)
			//console.log(item instanceof Array)
			if(Array.isArray(item)) {
				//console.log("Array elements")
				//console.log(item.length)
				if(item.length < 1) {
					console.log("not items in array")
					return
				}
				item.map(function(itm) {
					//console.log(itm)
					el.appendChild(itm)
				})
			} else {
				el.appendChild(item)
			}
		} else {
			console.log("text is not string or object type")
		}
	} else {
		console.log("text fail")
	}
	return el
}

/*
elem()
elem("div", {color:"blue", background:"gray"})
elem("div", {color:"blue", background:"gray"}, "hello world")
*/

function setAttr(update, slow) {
	if(slow) {
		//console.log("slow", slow)
		var replace = document.getElementById(update.id)
		//replace.style.opacity = 0.5
		var opamax = 0.99
		var opaint = 0.01
		var outslow = setInterval(function() {
			opamax = opamax - opaint
			//console.log(opamax)
			if(opamax <= 0) {
				clearInterval(outslow)
				update.style.opacity = opamax
				replace.parentNode.replaceChild(update, replace)
				var inslow = setInterval(function() {
					opamax = opamax + opaint
					//console.log(opamax)
					update.style.opacity = opamax
					if(opamax >= 1) {
						clearInterval(inslow)
					}
				}, slow)
			}
			replace.style.opacity = opamax
		}, slow)
	} else {
		//console.log("id ---", update.id)
		var replace = document.getElementById(update.id)
		//console.log(replace)
		replace.parentNode.replaceChild(update, replace)
	}
}

function rend(root, elem) {
	//console.log(typeof(root)) // todo check for html element
	root.appendChild(elem)
}