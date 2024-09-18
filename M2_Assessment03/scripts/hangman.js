// declare and initialize array
let game = ["COFFEE", "BAGEL", "AFFOGATO", "HAZELNUT", "FRENCH", "FILTER", "CROISSANT", "COLOMBIAN", "ALMOND", "MOCHA"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
// let found = false;  Having this up here caused an error. 
let wrong = [];

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    
    let found = false;
    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }
  
    if (found == false) {
        attemptsLeft--;
        if (wrong.includes(userLetter.toUpperCase())) {
            document.getElementById("twice").innerHTML = "That letter was guessed already. Please pick again.";
            return;
        }
        wrong.push(userLetter.toUpperCase());
        document.getElementById("guessed").innerHTML = wrong;
        const photos = ["images/02.png", "images/03.png", "images/04.png", "images/05.png", "images/06.png", "images/07.png"]
        if (attemptsLeft == 5) {
            document.getElementById("hangman").src = photos[0];
        }
        else if (attemptsLeft == 4) {
            document.getElementById("hangman").src = photos[1];
        }
        else if (attemptsLeft == 3) {
            document.getElementById("hangman").src = photos[2];
        }
        else if (attemptsLeft == 2) {
            document.getElementById("hangman").src = photos[3];
        }
        else if (attemptsLeft == 1) {
            document.getElementById("hangman").src = photos[4];
        }
        else if (attemptsLeft == 0) {
            document.getElementById("hangman").src = photos[5];
        }
        
    }
    

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML= 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';
    

    
});
