/*
///////////////////////////////////////
// Lecture: Hoisting

//FUNCTIONS
calculateAge(1965); // can put up here because 
//of hoisting since in variable object before executed

function calculateAge(year)
{
    console.log(1990-1965);
}


//VARIABLES
var retirement = function(year)
{
    console.log(65-(2016-year));
}

//retirement(1965)
// works down here only because expression above
//console.log(age);  //use before declaring, NOT
var age = 23;
console.log(age); // here used after declaration, 
//so works

function foo()
{
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/







/*

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    //    console.log(a + b + c);
    }
}
function third()
{
    var d = 'John';
//    console.log(c);
    //cannot access c because execution stack
    //is different from scope chain.
    //can only access var a and d
    console.log(a+d);
}


*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
// when here globally is window object.

calculateAge(1995);

function calculateAge(year)
{
    console.log(2016-year);
    console.log(this); // still global
}

var john ={
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function()    {
        console.log(this);
        //here, this refers to john object
        console.log(2016-this.yearOfBirth);
        // function innerFunction(){
        //     console.log(this);
        // // this here defaults to window, because
        // //just another function.  It goes global.
        // }
        // innerFunction();
    }
};

john.calculateAge();

var mike = 
{
    name: 'Mike',
    yearOfBirth: 1994
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();




