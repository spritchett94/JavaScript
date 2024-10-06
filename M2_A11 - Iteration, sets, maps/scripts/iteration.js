/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const games = ["Fallout", "Grand Theft Auto", "Red Dead Redemption", "Subnautica", "7 Days to Die"];

text1 = '';
for (const x of games) {
    text1 += x + '<br>';
}
document.getElementById("list").innerHTML = text1;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
// sets can have no duplicate values!

const songs = new Set(["Whiskey River", "All My Ex's Live in Texas", "The Gambler", "Amarillo by Morning", "All My Rowdy Friends"]);

text2 = '';
for (const e of songs) {
    text2 += e + '<br>';
}
document.getElementById('set1').innerHTML = text2;


// add two more songs to the set then display in the set2 paragraph
songs.add("Jolene");
songs.add("I Saw the Light");

text3 = '';
for (const e of songs) {
    text3 += e + '<br>';
}
document.getElementById('set2').innerHTML = text3;


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const contacts = new Map([
    ["Rose", 'flowerchild@gmail.com'],
    ["Paige", 'gardengoddess@yahoo.com'],
    ["Hannah", 'doggolover@gmail.com'],
    ["Kelly", 'cubsfan4ever@gmail.com'],
    ["Hannah", 'doggolover@gmail.com'],
]);

text4 = '';
// if i put key, value for some reason it switches order to show email first and name last... weird.
contacts.forEach (function(value, key) {
    text4 += key + ': ' + value + '<br>';
})
document.getElementById('map1').innerHTML = text4;


// add two new names and emails and display in map2 use the forEach() method
contacts.set("Nori", 'lotrNerd@gmail.com');
contacts.set("Laura", "shoptillyoudrop@gmail.com");

text5 = '';
contacts.forEach (function(value, key) {
    text5 += key + ': ' + value + '<br>';
})
document.getElementById('map2').innerHTML = text5;

// get and display the email of one person, display in map3
document.getElementById('map3').innerHTML = contacts.get("Kelly");