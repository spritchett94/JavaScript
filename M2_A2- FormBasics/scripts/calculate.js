// alert("HI") you can use this for debugging, to make sure your js file works with your HTML.

function addDate() {
     let today = new Date();
     //alert(today) used for debugging purposes
     document.getElementById("myDate").innerHTML = today;
     document.getElementById("name").value = "";
     document.getElementById("rm1length").value = "";
     document.getElementById("rm1width").value = "";
     document.getElementById("rm1height").value = "";
     document.getElementById("rm1cost").value = "";
     document.getElementById("rooms").value = "1";
}

function showScreen() {
     numRooms = document.getElementById("rooms").value;
     if (numRooms == 1) {
          document.getElementById("room2").style.display = "none";
          document.getElementById("room3").style.display = "none";
     }
     else if (numRooms == 2) {
          document.getElementById("room2").style.display = "block";
          document.getElementById("room3").style.display = "none";
     }
     else if (numRooms == 3) {
          document.getElementById("room2").style.display = "block";
          document.getElementById("room3").style.display = "block";
     }
}

function estimate() {
     let name = document.getElementById("name").value;
     let length1 = parseFloat(document.getElementById("rm1length").value);
     let width1 = parseFloat(document.getElementById("rm1width").value);
     let height1 = parseFloat(document.getElementById("rm1height").value);
     let totalSqFt1 = ((length1 * height1 * 2) + (length1 * width1 * 2));
     let cost1 = (totalSqFt1 * .65);
     document.getElementById("rm1cost").value = cost1;

     
     let length2 = parseFloat(document.getElementById("rm1length").value);
     let width2 = parseFloat(document.getElementById("rm1width").value);
     let height2 = parseFloat(document.getElementById("rm1height").value);
     let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
     let cost2 = (totalSqFt2 * .65);
     document.getElementById("rm2cost").value = cost2;

     let length3 = parseFloat(document.getElementById("rm1length").value);
     let width3 = parseFloat(document.getElementById("rm1width").value);
     let height3 = parseFloat(document.getElementById("rm1height").value);
     let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
     let cost3 = (totalSqFt3 * .65);
     document.getElementById("rm3cost").value = cost3;


     numRooms = document.getElementById("rooms").value;
     if (numRooms == 1) {
          var totalCost = cost1;
     }
     else if (numRooms == 2) {
          var totalCost = cost1 + cost2;
     }
     else if (numRooms == 3) {
          var totalCost = cost1 + cost2 + cost3;
     }
     
     document.getElementById("estimate").innerHTML = (name + ", your estimate is: " + totalCost)
}