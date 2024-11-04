$(document).ready(function () {
     
	$("#up").click(function(){
		$("#box").animate({
			marginTop: '-=20px'
		});
	});

	$("#down").click(function(){
		$("#box").animate({
			marginTop: '+=20px'
		});
	});

	$("#left").click(function(){
		$("#box").animate({
			marginLeft: '-=20px'
		});
	});

	$("#right").click(function(){
		$("#box").animate({
			marginLeft: '+=20px'
		});
	});
});