/* Generally, if else is better suited if there is a binary choice in the condition.

For example, in plain English: if it's sunny, wear sunglasses. Otherwise, don't.

In this case, using an if statement is an obvious choice.

When there are a smaller number of possible outcomes of truthy checks, it is still possible to use an if else statement, such as: 

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")                                             (---if else---)
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

However, if there are a lot of possible outcomes, it is best practice to use a switch statement because it is easier less verbose. Being easier to read, it is easier to follow the logic, and thus reduce cognitive load of reading multiple conditions.

Nevertheless, this is not a rule set in stone. It is simply a stylistic choice.

To reinforce this point, here's an example of the earlier if else conditional statement, using the "switch" syntax: 


//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;                                                          (--- Switch Syntax---)
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}

--------------------------------------------------------------------------------------------------------------------------------*/

// Exercise: Practice conditional statements

/*  
Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.
*/

var age = 15;
if(age >= 65){
    console.log("You get your income from your pension");
}else if (age<65 && age>=18){                  // use logical AND bcoz both cases need to be satisfied
    console.log("Each month you get a salary");
}else if (age<18){
    console.log("You get an allowance");                                                   // (--- IF ELSE ---)
}else {
    console.log("The value of the age variable is not numerical");
}
//-------------------------------------------

/* Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

Tips
*/


var day = `Tuesday`;   // day chosen is case sensitive for eg: Monday cannot be monday
switch(day) {
   case 'Monday':
       console.log('Meetings');
       break;
   case 'Tuesday':
       console.log('Work hard');
       break;
   case 'Wednesday':
       console.log('Code');                                                             //(--- SWITCH CASE ---)
       break;
   case 'Thursday':
       console.log('Read');
       break;
   case 'Friday':
       console.log('Summarize the week');
       break;
   case 'Saturday':
       console.log('party or Socialize');
       break;
   case 'Sunday':
       console.log('Relax');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}
//-----------------------------------------------------------------------

// FOR LOOP

for (var i=3; i>0 ;i--){
    console.log(i);                     // (--- FOR LOOP ---)
}
console.log("hojaye shuruu!!")

//------------------------------------------------------------------------

// WHILE LOOP

var counter = 3;

while(counter > 0){
    console.log(counter);
    counter -= 1;
}
console.log("khela hobe!!")

//-------------------------------------------------------------------------

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');

//---------------------------------------------------------------------------
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');

//-----------------------------------------------------------------------------

var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};
//-----------------------------------------------------------------------------

//  Loops and nested loops

/* 

*/

//nested loops - one inside another

// MULITIPLICATION TABLE


for (var firstNum = 0; firstNum < 2; firstNum++) {     // ----> OUTER loop
    for (var secondNum = 0; secondNum < 10; secondNum++) { // --------> inner loop
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}
//--------------------------------------------------------------------------------------------

// I can make a custom division table:

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

//--------------------------------------------------------------------------------------------

/*
Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/

for( var i=1; i<=10; i++){
    if(i==1){
        console.log("Gold medal")
    }else if(i==2){
        console.log("Silver medal")
    }else if(i==3){
        console.log("Bronze medal")
    }else{                                 //this block will run if no condition matches
        console.log(i)
    }
}
//--------------------------------------------------------------------------------------------------------------

/*
Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.*/

for(var i=1; i<=10; i++){
    switch(i){
        case 1:
        console.log('Gold medal')
        break;
        case 2:
        console.log('Silver medal')
        break;
        case 3:
        console.log('Bronze medal')
        break;
        default:                          //this block will run if no condition matches
        console.log(i)
        break;
    }
}
//-----------------------------------------------------------------------------------------------------------------