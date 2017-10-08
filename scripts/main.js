function areaOfCircle(dia){
	
	if(isNaN(dia) || dia==null){
		askDia("Plese enter the diameter of circle in number");
	}else{
		var area=(Math.PI*(dia/2)*(dia/2));
		document.write("Area of the circle for diameter "+dia+" is "+area);
	}
	
}

function askDia(msg){
	var dia =prompt(msg,0);
	areaOfCircle(dia);
}
askDia("Plese enter the diameter of circle");

