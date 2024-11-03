$(document).ready(function(){
  $("#btn1").click(function(){
    $("#img1").show();
  });
     $("#btn2").click(function () {
          $("#img1").hide();
     })
});

$(document).ready(function(){
  $("#btn3").click(function(){
    $("#img2").fadeToggle(3000);
  });
});

$(document).ready(function(){
  $("#btn4").click(function(){
    $("#panel").slideToggle("slow");
  });
});