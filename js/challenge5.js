console.log("here")

var msg = "Hover over an image below."



$('img').mouseenter(function() {
	console.log('mouseover');
	 	$('#image').css("background-image", "url('"+$(this).attr('src')+"')");
	 	$('#image').html($(this).attr('alt'));
})

$('img').focus(function() {
	 	$('#image').css("background-image", "url('"+$(this).attr('src')+"')");
	 	$('#image').html($(this).attr('alt'));
})
$('img').mouseleave(function() {
	 	$('#image').css("background-image", "url('')");
	 	$('#image').html(msg);
})
$('img').blur(function() {
	 	$('#image').css("background-image", "url('')");
	 	$('#image').html(msg);
})



// previous jquery method
// for (let i = 0; i < imgs.length; i++){
// 	imgs.eq(i).on("mouseover", function() { 
// 		console.log("mouseover done!")
// 	 	$('#image').css("background-image", "url('"+imgs[i].src+"')");
// 	 	$('#image').html(imgs[i].alt);
// 	 });

// 	imgs.eq(i).on("focus", function() {
// 	 	$('#image').css("background-image", "url('"+imgs[i].src+"')");
// 	 	$('#image').html(imgs[i].alt);
// 	 });

// 	imgs.eq(i).on("mouseleave", function() {
// 		console.log("mouse left!")
// 	 	$('#image').css("background-image", "url('')");
// 	 	$('#image').html(msg);
// 	 });

// 	imgs.eq(i).on("blur", function() {
// 	 	$('#image').css("background-image", "url('')");
// 	 	$('#image').html(msg);
// 	 });
// }



// javascript method
// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
