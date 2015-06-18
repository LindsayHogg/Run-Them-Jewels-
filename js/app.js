
$("#start").click(carMove1);
	

function carMove1(){
	$("#car").animate({"left":"700px"},2000,carMove2);
	var audio = $("#audio").get(0);
	audio.play();
	console.log("car1")
}

var carMove2 = function() {
	$("#car").addClass("rotate90");
	$("#car").animate({"top":"400px"},2000,carMove3);
	console.log("car2")
}

var carMove3 = function(){
	$("#car").removeClass("rotate90");
	$("#car").addClass("flip180");
	$("#car").animate({"left":"-=500px"},2000,carMove4);
	console.log("car3")
}

var carMove4 = function(){
	$("#car").removeClass("flip180");
	$("#car").animate({"top":"+=125px"},2000,carMove5);
	$("#car").addClass("rotate90");
	console.log("car4")
}

var carMove5 = function(){
	$("#car").removeClass("rotate90");
	$("#car").animate({"left":"425px"},2000, final)
	
	console.log("car5")

}

var final = function(){
	$("#car").addClass("spin");
	audio.pause();
}

