//function to calculate Area for the circle
function areaOfCircle(dia){
	//check for the number and not null
	if(isNaN(dia) || dia==null){
		//if null or not a number then ask for the dia again
		askDia("Plese enter the diameter of circle in number");
	}else{
		//if it is number calculate area
		var area=(Math.PI*(dia/2)*(dia/2));
		document.write("Area of the circle for diameter "+dia+" is "+area);
	}
	
}

function askDia(msg){
	var dia =prompt(msg,0);
	//pass the dia to calculate Area
	areaOfCircle(dia);
}
//call the function to get the diameter
askDia("Plese enter the diameter of circle");

