$(document).ready(function () {
     
	$("#up").click(function(){
		$("#box").animate({
			marginTop: '-=120px'
		}, 2000, function () {
			$("#box").css("background-color", "mediumslateblue");
		}).css("background-color", "red");
	});

	$("#down").click(function(){
		$("#box").animate({
			marginTop: '+=120px'
		}, 2000, function () {
			$("#box").css("background-color", "mediumslateblue");
		}).css("background-color", "blue");
	});

	$("#left").click(function(){
		$("#box").animate({
			marginLeft: '-=200px'
		}, 2000, function () {
			$("#box").css("background-color", "mediumslateblue");
		}).css("background-color", "orange");
	});

	$("#right").click(function(){
		$("#box").animate({
			marginLeft: '+=200px'
		}, 2000, function () {
			$("#box").css("background-color", "mediumslateblue");
		}).css("background-color", "green");
	});

	$("#stop").click(function(){
    $("#box").stop();
  });

});