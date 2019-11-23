$("#subscribe").on("change", function(){ /*click and on change difference*/
	// $("#emailField").toggle("slow"); ADVANCED METHOD 
	console.log("In here")
	let thing = $("#emailField");
	if ($(this).prop("checked")) {    /*is check a jquery method?*/
		console.log("selected")
		thing.show();
	} else {
		console.log("Not selected")
		thing.hide();
	}
})




// subscribe.onchange = function() {
// 	console.log("In here")
// 	let thing = $("#emailField");
// 	if (this.checked) {
// 		console.log("selected")
// 		thing.style.display = "block";
// 	} else {
// 		console.log("Not selected")
// 		thing.style.display = "none";
// 	}
	
// }