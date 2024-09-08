const produce1 = {
     name: "Apple",
     image: "images/apple.png",
     color: "Red",
     calories: 95,
     protein: 0.5,
     origin: "Kazakhstan"
}

const produce2 = {
     name: "Banana",
     image: "images/banana.png",
     color: "Yellow",
     calories: 105,
     protein: 1.3,
     origin: "Southeast Asia"
}

const produce3 = {
     name: "Pumpkin",
     image: "images/pumpkin.png",
     color: "Orange",
     calories: 285,
     protein: 11.9,
     origin: "Mexico"
}

const produce4 = {
     name: "Lime",
     image: "images/lime.png",
     color: "Green",
     calories: 20,
     protein: 0.5,
     origin: "India"
}

const produce5 = {
     name: "Plum",
     image: "images/plum.png",
     color: "Purple",
     calories: 30,
     protein: 0.5,
     origin: "Middle East"
}

function display() {
     let html1 = `<h2>${produce1.name}</h2>` + `<img src = ${produce1.image}>` +
          `<h3>Color:</h3>` + ` <p>${produce1.color}</p><br>` + 
          `<h3>Calories:</h3>` + ` <p>${produce1.calories}</p><br>` +
          `<h3>Protein:</h3>` + ` <p>${produce1.protein}</p><br>` +
          `<h3>Origin:</h3>` + ` <p>${produce1.origin}</p><br>`;
     document.getElementById('ob1').innerHTML = html1;

     let html2 = `<h2>${produce2.name}</h2>` + `<img src = ${produce2.image}>` +
          `<h3>Color:</h3>` + ` <p>${produce2.color}</p><br>` +
          `<h3>Calories:</h3>` + ` <p>${produce2.calories}</p><br>` +
          `<h3>Protein:</h3>` + ` <p>${produce2.protein}</p><br>` +
          `<h3>Origin:</h3>` + ` <p>${produce2.origin}</p><br>`;
     document.getElementById('ob2').innerHTML = html2;

     let html3 = `<h2>${produce3.name}</h2>` + `<img src = ${produce3.image}>` +
          `<h3>Color:</h3>` + ` <p>${produce3.color}</p><br>` +
          `<h3>Calories:</h3>` + ` <p>${produce3.calories}</p><br>` +
          `<h3>Protein:</h3>` + ` <p>${produce3.protein}</p><br>` +
          `<h3>Origin:</h3>` + ` <p>${produce3.origin}</p><br>`;
     document.getElementById('ob3').innerHTML = html3;

     let html4 = `<h2>${produce4.name}</h2>` + `<img src = ${produce4.image}>` +
          `<h3>Color:</h3>` + ` <p>${produce4.color}</p><br>` +
          `<h3>Calories:</h3>` + ` <p>${produce4.calories}</p><br>` +
          `<h3>Protein:</h3>` + ` <p>${produce4.protein}</p><br>` +
          `<h3>Origin:</h3>` + ` <p>${produce4.origin}</p><br>`;
     document.getElementById('ob4').innerHTML = html4;

     let html5 = `<h2>${produce5.name}</h2>` + `<img src = ${produce5.image}>` +
          `<h3>Color:</h3>` + ` <p>${produce5.color}</p><br>` +
          `<h3>Calories:</h3>` + ` <p>${produce5.calories}</p><br>` +
          `<h3>Protein:</h3>` + ` <p>${produce5.protein}</p><br>` +
          `<h3>Origin:</h3>` + ` <p>${produce5.origin}</p><br>`;
     document.getElementById('ob5').innerHTML = html5;

}