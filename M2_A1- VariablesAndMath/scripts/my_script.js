// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Sarah";
const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Sarah",
        lastName = "Pritchett";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Sarah",
        lastName = "Pritchett";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    // taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
    
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 11 + 9;
    document.getElementById("addition").innerHTML = "11 + 9 = " + addition;
    let subtraction = 32 - 16;
    document.getElementById("subtraction").innerHTML = "32 - 16 = " + subtraction;
    let multiplication = 10 * 10;
    document.getElementById("multiplication").innerHTML = "10 * 10 = " + multiplication;
    let exponent = 2**3;
    document.getElementById("exponent").innerHTML = "2**3 = " + exponent;
    let division = 25/5;
    document.getElementById("division").innerHTML = "25 / 5 = " + division;
    let modulus = 40%3;
    document.getElementById("modulus").innerHTML = "40 % 3 = " + modulus;
    let x = 5;
    x++;
    let increment = x;
    document.getElementById("increment").innerHTML = "5 + + = " + increment;
    let y = 14;
    y--;
    let decrement = y;
    document.getElementById("decrement").innerHTML = "14 -- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10  =  " + "(x = " + x + ")";
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1      " + "(x = " + x + ")";
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x -= 1      " + "(x = " + x + ")";
    x *= 3
    document.getElementById("times-equals").innerHTML = "x *= 3      " + "(x = " + x + ")";
    x /= 2
    document.getElementById("divide-equals").innerHTML = "x /= 2      " + "(x = " + x + ")";
    x %= 2
    document.getElementById("modulus-equals").innerHTML = "x %= 2      " + "(x = " + x + ")";
}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const weather = ["Rain", "Snow", "Sun", "Wind"];
    document.getElementById("array").innerHTML = weather;
    const person = { firstName: "Betty", lastName: "Swanson", age: 52}
    document.getElementById("object").innerHTML = person.firstName;

}
