// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
let lyrics = '';

for (let i = 99; i > 0; i--) {
     lyrics += [i] + " bottles of beer on the wall<br>"
}
document.getElementById("beer").innerHTML = lyrics;
// originally I have i < 100 but that crashed because each iteration is always less that 100...


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let text = '';
for (let x in months) {
     text += months[x] + '<br>';
}
document.getElementById("for-in").innerHTML = text;






// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let word = "Programming"
let display = '';
for (let x of word) {
     display += x + "<br>";
}
document.getElementById("for-of").innerHTML = display;



// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let i = 0
let textDisplay = '';
while (i < 51) {
     textDisplay += i + '<br>';
     i++;
}
document.getElementById("while").innerHTML = textDisplay;