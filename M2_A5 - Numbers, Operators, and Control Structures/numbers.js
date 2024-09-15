function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Sarah Pritchett"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let x = 2;
    let y = "18";
    let z = x + y;
    document.getElementById("add").innerHTML = '2 + "18" = ' + z;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let n = 708;
    document.getElementById("to-string").innerHTML = "toString() changes the number " + n + " to a string " + n.toString();


    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let e = 2.75;
    document.getElementById("exponent").innerHTML = "toExponential() on the number 2.75" + "<br>"
        + "0 Exponential: " + e.toExponential() + "<br>"
        + "1 Exponential: " + e.toExponential(1) + "<br>"
        + "3 Exponential: " + e.toExponential(3) + "<br>"
        + "5 Exponential: " + e.toExponential(5) + "<br>";
    
    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let f = 3.26;
    document.getElementById("fixed").innerHTML = "toFixed() rounds the number 3.26 to a given number of digits." + "<br>"
        + "0 Digits: " + f.toFixed(0) + "<br>"
        + "2 Digits: " + f.toFixed(2) + "<br>"
        + "4 Digits: " + f.toFixed(4) + "<br>"
        + "6 Digits: " + f.toFixed(6) + "<br>";


    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let p = 4.829;
    document.getElementById("precision").innerHTML = "toPrecision() returns a string, with the number 4.829 with a specified length." + "<br>"
        + "None: " + p.toPrecision() + "<br>" // can't put zero, otherwise it won't show.
        + "2 length: " + p.toPrecision(2) + "<br>"
        + "4 length: " + p.toPrecision(4) + "<br>"
        + "6 length: " + p.toPrecision(6) + "<br>";


    // Demonstrate the use of parseFloat() and print to the float paragraph
    
    document.getElementById("float").innerHTML = "parseFloat() converts strings to numbers. Only the first number is returned." + "<br>"
        + "String: 14 = Number " + parseFloat("14") + "<br>"
        + "String: 14.98 = Number " + parseFloat("14.98") + "<br>"
        + "String: 14 65 = Number " + parseFloat("14 65") + "<br>"
        + "String: 14 days = Number " + parseFloat("14 days") + "<br>"
        + "String: days 14  = Number " + parseFloat("days 14") + "<br>";

    // Demonstrate the use of parseInt() and print to the int paragraph
     document.getElementById("int").innerHTML = "parseInt() converts strings to a WHOLE number. Only the first number is returned." + "<br>"
        + "String: -112 = Number " + parseInt("-112") + "<br>"
        + "String: 112 = Number " + parseInt("112") + "<br>"
        + "String: -365.38 = Number " + parseInt("-365.38") + "<br>"
        + "String: 365.38 = Number " + parseInt("365.38") + "<br>"
        + "String: 2 4 6 8  = Number " + parseInt("2 4 6 8") + "<br>";


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "The == and === are both comparison operators but with differences. The == checks the inner value rather than the datatype, so \'10\' == to the number 10 is True. It doesn't accurately compare variables. Using the === is more strict. When using this, it checks to see if the values are identical and as well as the datatypes. So from above \'10\' === the number 10 is False. They are different datatypes - a string and a number, therefore different values."

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The Order of Precedence for Logical Operators are" + "<br>"
        + "1) ! (NOT)" + "<br>"
        + "2) && (AND)" + "<br>"
        + "3) || (OR)" + "<br>";
    

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    var answer = window.prompt("Type TRICK, TREAT, or BYE. Then click OK.")

    switch (answer) {
        case "TRICK":
            document.getElementById("switch").innerHTML = "You TP-ed my yard!";
            break;
        case "TREAT":
            document.getElementById("switch").innerHTML = "Full sized candy bars for you!";
            break;
        case "BYE":
            document.getElementById("switch").innerHTML = "See you next Halloween!";
            break;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var outside = "light";

    outside === "light"
        ? document.getElementById("ternary").innerHTML = "It's a beautiful sunny day!"
        : document.getElementById("ternary").innerHTML = "Look at all the stars in the sky!";
    

}