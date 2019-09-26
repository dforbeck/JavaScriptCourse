/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//declare all variables here, global
var scores, roundScore, activePlayer, gamePlaying; // dice was removed


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

init();

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
    if(gamePlaying)
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

    //3. update the round score (red box), if roll was not 1.
    if (dice !== 1) // double equal does not do type coercion
    {
        //add score
        roundScore += dice;
        //roundScore = roundScore + dice; // same as above
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //display the roundscore above of current textcontent roundscore
    }
    else 
    {
        //next player
        nextPlayer();
    }

    }
});

//select another event listener, on the click, with an anonymous function
document.querySelector('.btn-hold').addEventListener('click',function()
{
    if (gamePlaying)
    {
    //as soon as click 
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI, select score of active player and "print" that content.
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    if(scores[activePlayer]>=20)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        //changing style of loser above
        document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner')
        //above implements the winner CSS styling
        document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
        //above removes the active player css pieces
        gamePlaying = false;  // now cannot hold because have  winner
    }
    else
    {
        nextPlayer()
    }
    
    }
});

function nextPlayer ()
{
        //use ternary
        activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0'; 
        document.getElementById('current-1').textContent = '0';
        // sets red box to zero in user interface

        //now going to add a class and put somewhere else in HTML
        //the grey background of current player 
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        //Toggle is better
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //add if not there, if there, remove with "toggle"
        // I added a little space in the HTML to maeke it a second term
        //now it works.   
        
        //Hide DICE again before start of next person.  Dice class.
        // Player has an empty spot
        document.querySelector('.dice').style.display = 'none';
}

//listen to start new game event
document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
//ALL the things that start at the beginning of a game

scores = [0,0];// first and second player
roundScore = 0; // any round
activePlayer = 0;

gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

//CAN GET ITEMS BY ID, THE FOLLOWING WORKS ONLY FOR IDS
// set all values to beginning values to zero.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2'; //# is only query

//Remove winner/active class from previous game
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')

//start over with regular styling
document.querySelector('.player-0-panel').classList.add('active')

}




