$(document).ready(function(){
     $("#rsvp").click(function(){
          event.preventDefault();

          var line = $("#fname").val();
          line = line + " " + $("#lname").val() + "<br>";
          line = line + " " + $("#email").val() + "<br>";
          line = line + " " + "Attending: " + $("#attend").val() + "<br>";
          line = line + " " + "Guests: " + $("#guests").val() + "<br>";
          line = line + " " + "Meal: " + $("#meal").val() + "<br><br>";

          $("#list").append(line);
          $("#fname").val("");
          $("#lname").val("");
          $("#attend").val("blank");
          $("#email").val("");
          $("#guests").val("");
          $("#meal").val("blank");
     });

     $("#dark").click(function () {
          $("body").removeClass("light");
          $("body").addClass("dark");
          $(".heading").addClass("heading_dark");
          $(".heading").removeClass("heading_light");
          $(".container").addClass("container_dark");
          $(".container").removeClass("container_light");
     });

     $("#light").click(function () {
          $("body").removeClass("dark");
          $("body").addClass("light");
          $(".heading").addClass("heading_light");
          $(".heading").removeClass("heading_dark");
          $(".container").addClass("container_light");
          $(".container").removeClass("container_dark");
     });

     $("#small").click(function () {
          var currentFontSize = parseInt($(".container").css('font-size'));
          currentFontSize -= 2;
          setFont = currentFontSize + "px";
          $(".container").css("font-size", setFont);
          
     });

     $("#large").click(function () {
          var currentFontSize = parseInt($(".container").css('font-size'));
          currentFontSize += 2;
          setFont = currentFontSize + "px";
          $(".container").css("font-size", setFont);
          
     });
});