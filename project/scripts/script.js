const donut = [{
     heading: "Strawberry",
     image: "images/strawberry.jpg",
     altTag: "Strawberry Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Vanilla Sprinkle",
     image: "images/vanilla sprinkle.jpg",
     altTag: "Vanilla Sprinkle Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Glazed",
     image: "images/glazed.jpg",
     altTag: "Glazed Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Chocolate Sprinkle",
     image: "images/chocolate sprinkle.jpg",
     altTag: "Chocolate Sprinkle Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Double Chocolate",
     image: "images/double chocolate.jpg",
     altTag: "Double Chocolate Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Oreo",
     image: "images/oreo3.jpg",
     altTag: "Oreo Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Jelly",
     image: "images/jelly.jpg",
     altTag: "Jelly Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "French Cruller",
     image: "images/french cruller.jpg",
     altTag: "French Cruller Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Mnm",
     image: "images/mnm.jpg",
     altTag: "Mnm Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Coconut",
     image: "images/coconut.jpg",
     altTag: "Coconut Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Boston Creme",
     image: "images/boston creme.jpg",
     altTag: "Boston Creme Donut",
     price: "$3.00",
     description: "description"
}, {
     heading: "Bavarian Cream",
     image: "images/Bavarian Cream.jpg",
     altTag: "Bavarian Cream Donut",
     price: "$3.00",
     description: "description"
} ];





function start() {
     var donutLength = donut.length;
     for (i = 0; i < donutLength; i++) {
          document.getElementById('heading' + i).innerHTML = donut[i].heading;
          document.getElementById('img' + i).src = donut[i].image;
          document.getElementById('img' + i).setAttribute('alt', donut[i].altTag);
          document.getElementById('price' + i).innerHTML = donut[i].price;
          document.getElementById('description' + i).innerHTML = donut[i].description;
     }

}