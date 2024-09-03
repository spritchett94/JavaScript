function fresh() {
     document.getElementById("name").value = "";
     document.getElementById("grilledCheese").value = "";
     document.getElementById("turkey").value = "";
     document.getElementById("cuban").value = "";
     document.getElementById("beef").value = "";
     document.getElementById("caprese").value = "";
     document.getElementById("potatoSalad").value = "";
     document.getElementById("chips").value = "";
     document.getElementById("fries").value = "";
     document.getElementById("macSalad").value = "";
     document.getElementById("curds").value = "";
     document.getElementById("coke").value = "";
     document.getElementById("arnold").value = "";
     document.getElementById("drpepper").value = "";
     document.getElementById("herbal").value = "";
     document.getElementById("water").value = "";
}
function order() {
     let name = document.getElementById("name").value;
     var foodOrdered = []
     var totalCost = []

     let sandwich1 = document.getElementById("grilledCheese").value;
     if (sandwich1 != "") {
          let cost1 = (sandwich1 * 5.25)
          foodOrdered.push("Grilled Cheese")
          totalCost.push(cost1)
     }
     
     
     let sandwich2 = document.getElementById("turkey").value;
     if (sandwich2 != "") {
          let cost2 = (sandwich2 * 7.50)
          foodOrdered.push("Turkey & Cheddar")
          totalCost.push(cost2)
     }

     let sandwich3 = document.getElementById("cuban").value;
     if (sandwich3 != "") {
          let cost3 = (sandwich3 * 8.25)
          foodOrdered.push("Cuban")
          totalCost.push(cost3)
     }

     let sandwich4 = document.getElementById("beef").value;
     if (sandwich4 != "") {
          let cost4 = (sandwich4 * 8.25)
          foodOrdered.push("Italian Beef")
          totalCost.push(cost4)
     }

     let sandwich5 = document.getElementById("caprese").value;
     if (sandwich5 != "") {
          let cost5 = (sandwich5 * 7.25)
          foodOrdered.push("Caprese Melt")
          totalCost.push(cost5)
     }

     let side1 = document.getElementById("potatoSalad").value;
     if (side1 != "") {
          let cost6 = (side1 * 3.25)
          foodOrdered.push("Potato Salad")
          totalCost.push(cost6)
     }

     let side2 = document.getElementById("chips").value;
     if (side2 != "") {
          let cost7 = (side2 * 2.50)
          foodOrdered.push("Kettle Chips")
          totalCost.push(cost7)
     }

     let side3 = document.getElementById("fries").value;
     if (side3 != "") {
          let cost8 = (side3 * 1.25)
          foodOrdered.push("French Fries")
          totalCost.push(cost8)
     }

     let side4 = document.getElementById("macSalad").value;
     if (side4 != "") {
          let cost9 = (side4 * 3.25)
          foodOrdered.push("Macaroni Salad")
          totalCost.push(cost9)
     }

     let side5 = document.getElementById("curds").value;
     if (side5 != "") {
          let cost10 = (side5 * 3.75)
          foodOrdered.push("Cheese Curds")
          totalCost.push(cost10)
     }

     let drink1 = document.getElementById("coke").value;
     if (drink1 != "") {
          let cost11 = (drink1 * 1.85)
          foodOrdered.push("Coca Cola")
          totalCost.push(cost11)
     }

     let drink2 = document.getElementById("arnold").value;
     if (drink2 != "") {
          let cost12 = (drink2 * 2.50)
          foodOrdered.push("Arnold Palmer")
          totalCost.push(cost12)
     }

     let drink3 = document.getElementById("drpepper").value;
     if (drink3 != "") {
          let cost13 = (drink3 * 1.85)
          foodOrdered.push("Dr Pepper")
          totalCost.push(cost13)
     }

     let drink4 = document.getElementById("herbal").value;
     if (drink4 != "") {
          let cost14 = (drink4 * 1.85)
          foodOrdered.push("Herbal Ice Tea")
          totalCost.push(cost14)
     }

     let drink5 = document.getElementById("water").value;
     if (drink5 != "") {
          let cost15 = (drink5 * 1.25)
          foodOrdered.push("Bottled Water")
          totalCost.push(cost15)
     }

     let ordersum = document.getElementsByClassName('oS');
     for (let i = 0; i < ordersum.length; i++){
          if (foodOrdered[i] == undefined) continue;
          ordersum[i].innerHTML = foodOrdered[i] + "  $" + totalCost[i];
     }
     // document.getElementById("whichFood").innerHTML = "Order for: " + name + "<br/>" + foodOrdered[0] + " " + totalCost[0];

     let sum = 0.00;
     for (var x of totalCost) {
          sum += x;
          document.getElementById("pay").innerHTML = "Total:  $" + sum;
     }

}