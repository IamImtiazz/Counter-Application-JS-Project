/*To declare a variable, 
you can either use the let or const keyword. */
/*
let first_variable //with let, you can modify value of the variable
const last_variable //with const, you can't change the values of the variable
let my_string = "Hello world" // string
let my_number = 15 // number
let my_array = [1, "hello", "4", "world"] //array
let my_boolean = true //boolean
//Objects allow you to store data in key-value pairs.
let my_obj = {
    name: "John snow",
    aim: "Learning JavaScript",
    age: 20,
}
*/
/*To demonstrate how variables work in JavaScript, 
let's build a basic counter application. */
/*selecting elements on a web page based on their id
 when we use the document.querySelector("#id").*/

let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
//let output = document.querySelector("#ouput");

console.log(add, subract);

/*Events are used to listen to events that occur
 on a web page, such as when a user clicks a button 
 or scrolls down the page, among other things. */

 add.addEventListener("click", function () {
    // Every time the add button is pressed, this code will execute.
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    if (result > 100) {
        result = 0;
      }

    output.innerText = result;
   });

subract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
  
    if (result < 0) {
      result = 0;
    }
  
    output.innerText = result;
  });
/*Create a single function called addAndSubtract() 
that can handle both addition and subtraction 
operations without having to repeat any code.*/

