console.log('Hello World')
console.log("%cHello, World", "color: blue; font-size: 40px");

console.log("ho")

//single line comment

/* multi 
line comment*/

// variables

var person; //declare variable we can skip this step

var person = "john";           // assign value to variable
console.log(person)

var petdog = "Rex";
var petcat = "Pepper";

console.log(petdog)
console.log(petcat)

console.log("My pet dog's name is: " + petdog);
console.log("My pet cat's name is: "+ petcat);

var dogSound = "woof";
var catSound = "purr";

console.log(petdog +" says ", dogSound);
console.log(petcat +" says ", catSound);

catSound = "meow";                                  //Reassign value to variable
console.log(petcat +" now says " + catSound);

// Datatypes

// "null" data type can only hold value null (nothing)
//"undefined" data type hold undefiend data values or variables who is not yet assigned a value

/*  The capabilities of JavaScript have evolved over time and,
 version "ES6" introduced two new primitive data types to help with more complex tasks. 
 One is the "BigInt" data type which is like an extra large box that can accommodate a much greater range of numbers than the number data type.
*/

/*  Finally, there is the "symbol data type" which can be used as a unique identifier. 
Think of it as having multiple boxes with the same label and using different serial numbers to avoid mixing them up.  
*/

// OPEATORS

/*
 ARITHMETIC OPERATORS

 addtion           +
 subtraction       -
 multiplication    *
 division          /

*/

/*
 COMPARISON OPERATORS in JS

 Greater then      >
 Less than         <
Equal to           ==

*/

console.log( 2 + 2 );
console.log( 1 + 2 + 3 + 4 + 5 );
console.log( 20 - 18 );
console.log( 2 * 3 );
console.log( 8 / 1 );
console.log( 3 > 2 );
console.log( 2 > 3 );
console.log( 10 == 10 );