"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
	while(1){
		var username = prompt("Please enter your name.");
		if(username.length > 0)
			break;	
	}
// TODO: Show an alert message that welcomes the user based on their input.

	alert("Welcome "+username);
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
	var con = confirm("Do you like pizza?")

	if(con){
		alert("Wecome Pizza lover, "+ username);
	}else{
		alert(username +",\n Sorry! We don't have anything else")
	}
