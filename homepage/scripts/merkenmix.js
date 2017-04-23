merkenmix();

function merkenmix() {
    var i;
	var merkenpics = ["pics/Merken/Volkswagen/VW Scirocco Veluwerit DSC_0220 750x500 met logo.jpg"
						,"pics/Merken/Subaru/Subaru BRZ Veluwerit DSC_0219.750x500 met logo.jpg"
						,"pics/Merken/BMW/BMW Z4 8 april DRC Luxemburg 005.750x500 met logo.jpg"
						,"pics/Merken/Ford/27 mei Nieuwe Ford Focus ST gekocht 009.750x500 met logo.jpg"
						,"pics/Merken/Audi/Audi TT S 8 april DRC Luxemburg 058.750x500 met logo.jpg"
						,"pics/Merken/Seat/Seat Leon 19 mei DRC Oostenrijk HTC Niek 011.750x500 met logo.jpg"
						,"pics/Merken/Ford/Focus RS voorkant 2.750x500 met logo.jpg"
						,"pics/Merken/Ford/Ford Mustang DSC_0236.705x500 met logo.jpg"];	
	var merkennamen = ["VW Scirocco"
						,"Subaru BRZ"
						,"BMW Z4"
						,"Ford Focus ST"
						,"Audi TT S"
						,"Seat Leon"
						,"Ford Focus RS"
						,"Ford Mustang"];
	var myIndexBase = Math.floor((Math.random() * merkenpics.length));
    for (i = 0; i < merkenpics.length; i++) {
		var myIndex = myIndexBase + i;
		if (myIndex > merkenpics.length - 1) {myIndex = myIndex - merkenpics.length}
		var x = document.getElementById("merkenpic" + myIndex);
		x.src = merkenpics[i];
		x.alt = merkennamen[i];
		x.title = merkennamen[i];
    }
}
