// declare number, initialize userNumber and difference
let number = Math.floor(Math.random() * 1001);
var userNumber = 0;
var difference = 0;



document.getElementById("submit").addEventListener("click", function(event){

     event.preventDefault();
     userNumber = document.getElementById("guess").value;
     difference = (number - userNumber);
     displayPrevious = document.getElementById("previous").innerHTML = userNumber;
    document.getElementById("guess").value = ''; //would this 
//     document.getElementById("correct").value = ''; //would this 
     if (isNaN(userNumber)){
          document.getElementById("correct").innerHTML = "Please enter a valid number.";
     }
     
    
     if (difference >= 1 && difference <= 10) {
          document.getElementById("correct").innerHTML = "VERY HOT!";
          document.getElementById("correct").style.color = "red";
     }
     else if (difference >= 11 && difference <= 50) {
          document.getElementById("correct").innerHTML = "WARMER";
          document.getElementById("correct").style.color = "orange";
     }
     else if (difference >= 51 && difference <= 100) {
          document.getElementById("correct").innerHTML = "Warm";
          document.getElementById("correct").style.color = "rgb(246, 181, 60)";
     }
     else if (difference >= 101 && difference <= 300) {
          document.getElementById("correct").innerHTML = "Cold";
          document.getElementById("correct").style.color = "cadetblue";
     }
     else if (difference >=301 && difference <= 600) {
          document.getElementById("correct").innerHTML = "Colder";
          document.getElementById("correct").style.color = "blue";
     }
     else if (difference >=601 && difference <= 1000) {
          document.getElementById("correct").innerHTML = "Coldest";
          document.getElementById("correct").style.color = "darkblue";
     }
     else if (userNumber == number) {
          document.getElementById("correct").innerHTML = "YOU WIN!";
           document.getElementById("correct").style.color = "green";
     }
});
