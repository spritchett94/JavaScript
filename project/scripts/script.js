const donut1 = {
     heading: "Strawberry",
     image: "images/strawberry.jpg",
     altTag: "Strawberry Donut",
     price: "3.00",
     description: "description"
}

const donut2 = {
     heading: "Vanilla Sprinkle",
     image: "images/vanilla sprinkle.jpg",
     altTag: "Vanilla Sprinkle Donut",
     price: "3.00",
     description: "description"
}

const donut3 = {
     heading: "Glazed",
     image: "images/glazed.jpg",
     altTag: "Glazed Donut",
     price: "3.00",
     description: "description"
}

const donut4 = {
     heading: "Chocolate Sprinkle",
     image: "images/chocolate sprinkle.jpg",
     altTag: "Chocolate Sprinkle Donut",
     price: "3.00",
     description: "description"
}


function start() {
     document.getElementById('heading1').innerHTML = donut1.heading;
     document.getElementById('img1').src = donut1.image;
     document.getElementById('img1').setAttribute('alt', donut1.altTag);
     document.getElementById('price1').innerHTML = donut1.price;
     document.getElementById('description1').innerHTML = donut1.description;

}