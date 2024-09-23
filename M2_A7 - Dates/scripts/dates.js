/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let date1 = new Date();
document.getElementById("basic").innerHTML = date1;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
let date2 = new Date(2024, 8, 23, 12, 1);
document.getElementById("today").innerHTML = date2;



// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
let date3 = new Date("April 28, 1994");
document.getElementById("birthday").innerHTML = date3;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = date1.toUTCString();



//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

// ISO Date      YYYY-MM-DD Depending on your timezone, the results will vary by 1 day
let dateFormat1 = new Date("2024-07-04"); 
document.getElementById("date1").innerHTML = dateFormat1;

// Short Date     MM/DD/YYYY
let dateFormat2 = new Date("07/04/2024"); 
document.getElementById("date2").innerHTML = dateFormat2;

// Long Date - the Month can be written fully or abbr to 3 letters. Usually MMM DD YYYY
let dateFormat3 = new Date("Jul 04 2024"); 
document.getElementById("date3").innerHTML = dateFormat3;



//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

// getFullYear() Method
document.getElementById("get1").innerHTML = date3.getFullYear();

// getMonth() Method
document.getElementById("get2").innerHTML = date3.getMonth();

// getDate() Method
document.getElementById("get3").innerHTML = date3.getDate();

// getDay() Method
document.getElementById("get4").innerHTML = date3.getDay();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

// setFullYear() Method
date1.setFullYear(2020);
document.getElementById("set1").innerHTML = date1;

// setMonth() Method
date1.setMonth(2);
document.getElementById("set2").innerHTML = date1;

// setDate() Method
date1.setDate(17);
document.getElementById("set3").innerHTML = date1;

// setHours() Method
date1.setHours(13)
document.getElementById("set4").innerHTML = date1;