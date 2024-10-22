// Array of donut Objects
const donut = [{
     heading: "Strawberry",
     image: "images/strawberry.jpg",
     altTag: "Strawberry Donut",
     price: 2.00,
     qty: 0
     // description: "description"
}, {
     heading: "Vanilla Sprinkle",
     image: "images/vanilla sprinkle.jpg",
     altTag: "Vanilla Sprinkle Donut",
     price: 2.25,
     qty: 0
     // description: "description"
}, {
     heading: "Glazed",
     image: "images/glazed.jpg",
     altTag: "Glazed Donut",
     price: 1.50,
     qty: 0
     // description: "description"
}, {
     heading: "Chocolate Sprinkle",
     image: "images/chocolate sprinkle.jpg",
     altTag: "Chocolate Sprinkle Donut",
     price: 2.25,
     qty: 0
     // description: "description"
}, {
     heading: "Double Chocolate",
     image: "images/double chocolate.jpg",
     altTag: "Double Chocolate Donut",
     price: 2.00,
     qty: 0
     // description: "description"
}, {
     heading: "Oreo",
     image: "images/oreo3.jpg",
     altTag: "Oreo Donut",
     price: 2.25,
     qty: 0
     // description: "description"
}, {
     heading: "Jelly",
     image: "images/jelly.jpg",
     altTag: "Jelly Donut",
     price: 2.75,
     qty: 0
     // description: "description"
}, {
     heading: "French Cruller",
     image: "images/french cruller.jpg",
     altTag: "French Cruller Donut",
     price: 1.50,
     qty: 0
     // description: "description"
}, {
     heading: "Mnm",
     image: "images/mnm.jpg",
     altTag: "Mnm Donut",
     price: 2.25,
     qty: 0
     // description: "description"
}, {
     heading: "Coconut",
     image: "images/coconut.jpg",
     altTag: "Coconut Donut",
     price: 2.25,
     qty: 0
     // description: "description"
}, {
     heading: "Boston Creme",
     image: "images/boston creme.jpg",
     altTag: "Boston Creme Donut",
     price: 2.75,
     qty: 0
     // description: "description"
}, {
     heading: "Bavarian Cream",
     image: "images/Bavarian Cream.jpg",
     altTag: "Bavarian Cream Donut",
     price: 2.75,
     qty: 0
     // description: "description"
}];

// To load donut card elements with corresponding donut object
function start() {
     let donutLength = donut.length;
     for (i = 0; i < donutLength; i++) {
          document.getElementById('heading' + i).innerHTML = donut[i].heading;
          document.getElementById('img' + i).src = donut[i].image;
          document.getElementById('img' + i).setAttribute('alt', donut[i].altTag);
          document.getElementById('price' + i).innerHTML = '$' + donut[i].price.toFixed(2);
          // document.getElementById('description' + i).innerHTML = donut[i].description;
     }
}

// Function to calculate total price of all donuts based on their quantity
function getTotalPrice() {
     let totalPrice = 0;
     donut.forEach(d => {
          totalPrice += d.price * d.qty;
     });
     return totalPrice.toFixed(2);  // Round to 2 decimal places
}

// Function to update the total price in the HTML
function updateGrandTotal() {
     let grandTotalPrice = getTotalPrice();
     document.getElementById('total').innerHTML = `$${grandTotalPrice}`;
}

// Array to store counts for each donut (12 Donuts)
var donutCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
// Array to store add buttons for each donut card
// The forEach method will loop over this array
var addButtons = [document.getElementById('addBtn0'), document.getElementById('addBtn1'),
document.getElementById('addBtn2'), document.getElementById('addBtn3'),
document.getElementById('addBtn4'), document.getElementById('addBtn5'),
document.getElementById('addBtn6'), document.getElementById('addBtn7'),
document.getElementById('addBtn8'), document.getElementById('addBtn9'),
     document.getElementById('addBtn10'), document.getElementById('addBtn11')];
// Array to store quantity displays located in cart
var qtyDisplays = [document.getElementById('qty0'), document.getElementById('qty1'),
document.getElementById('qty2'), document.getElementById('qty3'),
document.getElementById('qty4'), document.getElementById('qty5'),
document.getElementById('qty6'), document.getElementById('qty7'),
document.getElementById('qty8'), document.getElementById('qty9'),
document.getElementById('qty10'), document.getElementById('qty11')];

// Loop to attach event listeners to each addButtons and to increment quantity
// parameters: button is for each element in the addButtons array along with it's corresponding index
// ex. 'button' would be refer to the element id=addBtn0 ALSO taking it's index which is 0 in the array and using it's 0 index in the next array's
addButtons.forEach((button, index) => {
     button.addEventListener("click", function () {  
          donutCounts[index]++;  // donutCounts[0]++ will update the value inside at 0 index
          donut[index].qty = donutCounts[index];
          qtyDisplays[index].innerHTML = donut[index].qty;
          updateGrandTotal();
     });
});


// Array to keep the order of selected donuts
const specificDonut = [];

// Function to add a donut to the order if it's not already selected
function order(num) {
     if (!specificDonut.includes(donut[num])) {
          specificDonut.push(donut[num])
          // console.log(specificDonut);
          displayItems(specificDonut);

     }
}

// Function to display selected donuts in the cart area
function displayItems(specificDonut) {
     let specificDonutLength = specificDonut.length;

     for (i = 0; i < specificDonutLength; i++) {
          document.getElementById('itemImage' + i).src = specificDonut[i].image;
          document.getElementById('itemHeading' + i).innerHTML = specificDonut[i].heading;
          document.getElementById('itemPrice' + i).innerHTML = "$" + specificDonut[i].price.toFixed(2);
          document.getElementById('removeBtn' + i).style.display = 'block';
     }
}

// Function to show alert message and refresh page
function purchase() {
     alert('Order Sent! Thank you!');
     location.reload();
     
}
