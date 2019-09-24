/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//declare all variables here
var scores, roundScore, activePlayer; // dice was removed

scores = [0,0];// first and second player
roundScore = 0; // any round
activePlayer = 1;

//now dice takes on random variable from 1 to 6
// see notes on effect of each piece
//dice = Math.floor(Math.random()*6)+1;
//console.log(dice);

//to get access to DOM
//selects the number by original score 43 element
//it's current because watn current not global
//GETTER Example
//document.querySelector('#current-' + activePlayer).
//textContent = dice; //changes the text content which is

//variable defined up top.
//because of coercion have now used the variable 
//above current with ActivePlayer piece.

//document.querySelector('#current-' + activePlayer).
//innerHTML = '<em>'+dice+'</em>';
//inner HTML has to be a string, "emphasized"/italics

//GETTER
//example: can use querySelector to only READ and store them
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
//selects the values and stores them in the variable
//we dont't set it equal to anything, 
//we read the "content"

//Change the CSS style to none
//Want to make it disappear at outset
//change by style method, CSS display property, then CSS value 
document.querySelector('.dice').style.display = 'none';

//CAN GET ITEMS BY ID, THE FOLLOWING WORKS ONLY FOR IDS
// set all values to beginning values to zero.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//EVENT HANDLER
//Button where roll dice.
// select that roll dice and listen for an event, 
//this case, click //one of two arguments//
//can see the MDN reference table to find order
//second argument, is function as soon as event happens

// function(btn)
//     {
//     //do something here
//     )
// btn();
//document.querySelector('.btn-roll').addEventListener('click',btn);
//btn does not get () above because don't want to call it,
//want the event listener to call it.
//this is call back function example.  Can also use anonymous function 
// which is a fucntion that doesn't use a name, but is right in there.
// see below
document.querySelector('.btn-roll').addEventListener('click',function()
{
    //1, random number
    var dice = Math.floor(Math.random()*6)+1;
    // only declare here now because only need when someone clicks.
    
    //2. display the result
    //need to bring back since display is 'none'
     // also need correct number. so create variable to store selection 
    var diceDOM = document.querySelector('.dice'); //store the selection
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; // change the image w. source attribute


    //3. update the round score, if roll was not 1.

});







