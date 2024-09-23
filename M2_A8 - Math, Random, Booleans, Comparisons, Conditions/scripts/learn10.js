function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    // Math.round(x) returns the nearest integer
    document.getElementById("round").innerHTML = "Math.round(5.4) = "+ Math.round(5.4);
    // Math.ceil(x) returns the value of x rounded UP to its nearest integer
    document.getElementById("ceil").innerHTML = "Math.ceil(1.1) = " + Math.ceil(1.1);
    // Math.floor(x) returns the value of x rounded DOWN to its nearest integer
    document.getElementById("floor").innerHTML = "Math.floor(4.9) = " + Math.floor(4.9);
    // Math.trunc(x) returns the integer part of x
    document.getElementById("trunc").innerHTML = "Math.trunc(3.3) = " + Math.trunc(3.3);
    // Math.sign(x) returns if x is negative, null or positive
    document.getElementById("sign").innerHTML = "Math.sign(-7) = " + Math.sign(-7);
    // Math.pow(x) returns the value of x to the power of y
    document.getElementById("pow").innerHTML = "Math.pow(9,2) = " + Math.pow(9,2);
    // Math.min(x)  returns the lowest value in a list of arguments
    document.getElementById("min").innerHTML = "Math.min(19, 243, 8, -35, 50, -2) = " + Math.min(19, 243, 8, -35, 50, -2);
    // Math.random(x) returns a random number between 0 and 1
    document.getElementById("random").innerHTML = "Math.random() = " + Math.random();


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    // Math.random() used with Math.floor() can be used to return random integers.
    document.getElementById("random2").innerHTML = "Math.floor(Math.random() * 101) = " +
        Math.floor(Math.random() * 101);


    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference
     document.getElementById("boolean").innerHTML = "Boolean(11 > 40) = " + Boolean(11 > 40);

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 10;
    document.getElementById("comp1").innerHTML = '10 == "10" is ' + (x == "10");
    document.getElementById("comp2").innerHTML = '10 === "10" is ' + (x === "10");
    document.getElementById("compText").innerHTML = "The '==' operator compares two variables after performing type conversion if necessary. This will not fully compare two variables, especially if they are different data types, like above - one is a number, and the other a string. The '===' operator checks to see if the values AND data types are equal.";



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}