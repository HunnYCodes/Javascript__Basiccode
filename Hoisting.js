//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
///Hoisting allows functions to be safely used in code before they are declared.

/*
//Function hoisting-------------------------------------------------------------------------------------------------------
//One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

//The result of the code above is: "My cat's name is Tiger"






//Without hoisting you would have to write the same code like this:

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

catName("Tiger");

//The result of the code above is the same: "My cat's name is Tiger"
*/



console.log(x);
sayHello()
var x = 90
function sayHello(){
    console.log("Hey everyone")
}