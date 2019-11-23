$("#useBilling").change(function(){
	let home = $("#home")
	let bill = $("#billing")
	if ($(this).prop("checked")) {           /*why this.prop("checked") does not work --- need the $sign*/
		home.val(bill.val())
		home.prop("disabled", true);  /*attr and prop's difference --- attr means name/id/class, prop means attribute like checked/disabled*/
	} else {
		console.log("Not checked")
		home.val("");
		home.prop("disabled", false);
	}
})





// useBilling.onchange = function() {
// 	let home = document.querySelector("#home")
// 	let bill = document.querySelector("#billing")
// 	if (this.checked) {
// 		home.value = bill.value;
// 		home.disabled = true;
// 	} else {
// 		console.log("Not checked")
// 		home.value = "";
// 		home.disabled = false;
// 	}
// }