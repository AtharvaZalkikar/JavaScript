function addTwonums(a,b){
    var c = a + b;
    console.log(c)
}                                            // (----- FUNCTIONS ------)

addTwonums(2,4)
addTwonums(5,7)
// -----------------------------------------------

/* ARRAYS */

var train1 = ["wheat",'salt','sugar','milk'];         // Array declared

console.log(train1[2]);         // <---------------- item from array called

//-----------------------------------------------------------------------------------------------------------------------------

/* -------------- Building and calling functions -------------->

By the end of this reading you should be able to:

Code simple functions that can accept an array and iterate through it  

Let's start with giving our function declaration a name:

//------------------------ 

So, I've declared a listArrayItems function, and I've set it up to accept a single parameter, arr - which stands for an array.

Now, I'll need to code a for loop to loop over an array.

As covered in previous lessons in this course, a for loop needs the following information: 

1. the starting loop counter value as a temporary variable i 

2. the exit condition (the maximum value of the loop counter variable i, above which the loop no longer runs) 

3. how to update the value of i after each loop

Here's the information I'll use in this function declaration: 1. The loop's starting counter will be 0. The reason for setting it to zero is due to the fact that arrays are also counted from zero. 

This means that I'll have a one-to-one mapping of the current value of the i variable at any given time, corresponding to the same index position of any item in the arr array 2. 

The for loop's exit condition is when the value of i is equal or greater than arr.length. 

Since the arr.length counts the number of items in the array from one, and the array items are indexed from zero, this effectively means that as soon as i is equal to arr.length, the loop will finish and any other code after it will be run. 

This practically means that the exit condition for this for loop will be i < arr.length returning false. 

In other words, as long as i < arr.length is true, this for loop will continue to run. 3. To make sure that none of the items in the arr array are skipped, I have to increase the value of i by 1 after each loop.

Now that I know exactly how my for loop should behave, I can add it to my listArrayItems() function:

Now all that I have left to decide is how I want to output each item from the received arr array.

It can be as simple as console logging the array item index of the current value of i:

*/

/*function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

listArrayItems(colors);*/ //display all items in the array named colors at once

/*I can update the output any way I like. For example, here are my arr items with a number in front of each item:  */

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i])                      //To start the count from one instead of zero, I can update my function declaration as here
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

//----------------------------------------------------------------------------------------------------------------------------------

//I can even add one or more conditions, such as:  

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
/*Now I'm adding control flow right inside my function, based on whether a specific array member matches a specific value - in this case the string "red".

Invoking my newest updated version of the listArrayItems function on the colors array will now result in the following output:
0 'tomato!'
100 'orange'
200 'yellow'
300 'green'
400 'blue'
500 'purple'
600 'pink' */


/* 
Exercise: Practicing with functions
Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that given word.  

Task 1:
Write a function named letterFinder that accepts two parameters: word and match.

Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

Task 3:
Add an if statement inside the for loop whose condition works as follows:

 Access each of the letters inside the passed in word using the counter variable, with word[i]. 

Check if the current word[i] is equal to the value of match.

Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".

Your "output" should be the following:
<-------------------------->
 Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3
<-------------------------->
*/

function letterFinder(word,match){                                    // A function that accepts two parameters

    for (var i=0;i < word.length;i++){                        //this loop exists when i is equal to the length of the word
                             
        if (word[i]==match){                                   //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i);            
        }
        else{
            console.log('---No match found at', i);
        }
    }
}
letterFinder('test','t')
//------------------------------------------------------------------------------------------------------------------------------------

// OBJECTS

//Object literals and the dot notation

/*creating an object with properties and their values

var assistantManager = {                                // <---------- Creating object assistantmanager with literal "{ }" 
    rangeTilesPerTurn: 3,                         
    socialSkills: 30,                                          
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Notice that it's very easy to build any kind of an object in JavaScript using this example syntax.

//For example, here's a "table" object:
                                                                        // (---- OBJECT -----)
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,                                  //To access the table object, I can simply console log the entire object:
}                                               
console.log(table);                                 //display the object in the developer console  

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
An alternative approach of building objects is to first save an empty object literal to a variable, 
then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; 
for example:
*/

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2); // {rooms: 3, color: "brown", priceUSD: 10000}
                      
                      //Additionally, nothing is preventing me from combining the two approaches. For example:  

house2.windows = 10;
console.log(house2); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

//This flexbility additionally means that I can update already existing properties, not just add new ones:  

house2.windows = 11;
console.log(house2); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*  

Brackets Notation

To understand how it works, it's best to use an example, 
so I'll go through the process of coding the house2 object again, in the same way that I did with the dot notation, only this time, I'll use the brackets notation.

*/
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

//I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like in the following example:

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

//With the brackets notation, I can add space characters inside property names, like this:  

car["number of doors"] = 4;
console.log(car);                     // {color: 'green', speed: 100, number of doors: 5}

//-----------------------------------------------------------------------------------------------------------------

/*

Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.

To understand what that means, consider the following example:*/

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

/*The above code will result in the following output:  
100
200
red*/


/*

Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

The value of i was 0 

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.

*/




/* --------------------------------  ARRAYS ARE OBJECTS ------------------------  */



/*By the end of this reading, you'll be able to:

Explain that arrays are objects, with their own built-in properties and methods

Outline the common way to extend arrays using the push() method

and explain how to trim the last member of an array using the pop() method*/

/*In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.

To add new items to an array, I can use the "push()"" method:

To remove the last item from an array, I can use the "pop()" method:  */

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
console.log(fruits); 

fruits.pop();
console.log(fruits); // ['apple']
//------------------------------------------------------------------------------------------------------------------------------------

/*

Tying into some earlier lessons in this course, I can now build a "function" that takes all its arguments and pushes them into an array, like this: */

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);                                      
    arr.push(two);
    arr.push(three);
    //console.log(arr);
    return arr;
}
                                                                //I can now call the arrayBuilder() function, for example, like this:  
arrayBuilder()
arrayBuilder('apple', 'pear', 'plum');                              // ['apple', 'pear', 'plum'] 

                                                                /*Additionally, I can save this function call to a variable. 

                                                                I can name it anything, but this time I'll use the name: simpleArr.*/

var simpleArr = arrayBuilder('apple', 'pear', 'plum'); 

                                                                //And now I can console log the values stored in simpleArr:  
console.log(simpleArr); // ['apple','pear','plum']
//----------------------------------------------------------------------------------------------------------------------------------------------------------------



/* The math object is really useful when using some of its built in methods, one of which is the random method. For example, 
this method allows you to generate a decimal number between 0 and 0.99.*/

/* Exercise: Creating arrays and objects 

In this exercise lab you will practice creating arrays and objects.

Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.

*/

var clothes = [];
clothes.push("shirts");
clothes.push("Pants");
clothes.push("Joggers");
clothes.push("Shorts");
clothes.push("Vests");

clothes.pop();

clothes.push("drama")

console.log(clothes[2]);

var favCar = {};
favCar.color = "Red";
favCar.convertible = false;
console.log(favCar);

///----------------------------------------------------------------------------------------------------------------------------------
