$("#ch3form").submit(function(){
	var fruit = $('input[name="fruit"]')
    var standing = $('input[name = "standing"]')
    var isFruit = false;
    var isStanding = false;

    
    fruit.each(function(){
    	if ($(this).prop("checked")) {
    		isFruit = true;
    	}
    })

    standing.each(function() {
    	if ($(this).prop("checked")){
    		isStanding = true;
    	}
    })

    // previous method
    // for (let i = 0; i < fruit.length;i++){
    //     if (fruit[i].checked){
    //     	isFruit = true;
    //     }
    // }
   

    // for (let i = 0; i < standing.length;i++){
    //     if (standing[i].checked){
    // 		isStanding = true;
    // 	}
    // }
    if (!isFruit){
    	alert("You must pick a fruit!")
    	event.preventDefault();
    }
    if (!isStanding){
		alert("You must pick a standing!")
    	event.preventDefault();
    }
    // if (!isFruit && !isStanding) {
    // 	alert("You must pick a fruit and a standing!")
    // 	event.preventDefault();
    // }


    
    
    


})







// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;
// }

