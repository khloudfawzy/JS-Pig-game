/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//------------------------------------
// first version
//------------------------------------

// var scores, roundScore,activePlayer, gamePlaying;
// init();
// var previousDice;
// //eventListener(event type, the function will be called as soon as events happen)
// //it can be external function and then just erite its name without the paranthesis
// //or we can define the function itself as a parameter and this is called anonymous function
// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if(gamePlaying){
//             //1- a random number
//             var dice = Math.floor(Math.random() * 6 + 1);
//             console.log(dice);
//             //2- display the result
//             var diceDOM = document.querySelector('.dice');
//             diceDOM.style.display = 'block' ;
//             diceDOM.src = 'dice-' + dice + '.png';


//             //3- update the round score IF the rolled number was NOT a one
//             if (previousDice === 6 && dice === 6){
//                 resetScore();

//             }else if (dice !== 1){
//                 // add score
//                 roundScore += dice;
//                 document.querySelector('#current-' + activePlayer).textContent = roundScore;
//             }
//              else{
//                 nextPlayer();
//             }

//             previousDice = dice;
//             console.log(previousDice);
//         }
    

// });

// // to add score to the total score
// document.querySelector('.btn-hold').addEventListener('click', function(){
//         if(gamePlaying){
//             //add the current score to the total score
//             scores[activePlayer] += roundScore;
//             document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

//             var input = document.querySelector('.winning-score').value;
//             console.log(input);

//             //if the user doesn't enter a value we don't use the input value
//             //all values of undifined, 0, null or "" are coerced to false
//             if(input){
//                 var winningScore = input;
//             } else {
//                 winningScore = 100;
//             }

//             //check if player won the game
//             if (scores[activePlayer] >= winningScore){
//                 //declare the winner
//                 document.getElementById('name-' + activePlayer).textContent = 'winner!';

//                 //change the style
//                 document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//                 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//                 document.querySelector('.dice').style.display = 'none';

//                 //change the gameplaying to false
//                 gamePlaying = false;

//             } else {
//                 nextPlayer();
//             }
//         }



// });

// //to reset the entire score after hitting two 6 in a row

// function resetScore(){
//     //to rest the entire score in the UI
//     scores[activePlayer] = 0;
//     document.getElementById('score-' + activePlayer).textContent = scores[activePlayer] ;

//     //to make the other player play
//     nextPlayer();
// }

// function nextPlayer(){
//     //set the current to 0 in the UI
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     //update the UI
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     //make the other player play
//     activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
//     roundScore =0;

//     //hide the dice again
//     document.querySelector('.dice').style.display = 'none';
// }


// document.querySelector('.btn-new').addEventListener('click', init);

// //initialization function
// function init(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;
    
//     document.querySelector('.dice').style.display = 'none' ;
    
//     document.getElementById('score-0').textContent = '0' ;
//     document.getElementById('score-1').textContent = '0' ;
//     document.getElementById('current-0').textContent = '0' ;
//     document.getElementById('current-1').textContent = '0' ;

//     //change the name from winner to the initial names
//     document.getElementById('name-0').textContent = 'player 1';
//     document.getElementById('name-1').textContent = 'player 2';

//     //remove winner and return class
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');

//     //adding active class to the first player
//     // we did we remove it then? because we don't know who was the active player when the game ended
//     document.querySelector('.player-0-panel').classList.add('active');
// }


//------------------------------------
// final version
//------------------------------------



var scores, roundScore,activePlayer, gamePlaying;
init();
var previousDice;
//eventListener(event type, the function will be called as soon as events happen)
//it can be external function and then just erite its name without the paranthesis
//or we can define the function itself as a parameter and this is called anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
            //1- a random number
            var dice1 = Math.floor(Math.random() * 6 + 1);
            var dice2 = Math.floor(Math.random() * 6 + 1);
            var diceSum = dice1 + dice2;
            console.log(dice1, dice2);
            //2- display the result
            // var diceDOM = document.getElementsByClassName('dice');
            // for(var i = 0; i < diceDOM.length; i++){
            //     diceDOM[i].style.display = 'block' 
            // }
            // diceDOM.src = 'dice-' + dice1 + '.png';
            // diceDOM.src = 'dice-' + dice2 + '.png';

            document.getElementById('dice-1').style.display = 'block';
            document.getElementById('dice-2').style.display = 'block';
            document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
            document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    


            //3- update the round score IF the rolled number was NOT a one
            if (previousDice === 6 && dice1 === 6 && dice2 === 6){
                resetScore();

            }else if (dice1 !== 1 && dice2 !== 1){
                // add score
                roundScore += diceSum;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
             else{
                nextPlayer();
            }

            previousDice = dice1+dice2;
        }
    

});

// to add score to the total score
document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gamePlaying){
            //add the current score to the total score
            scores[activePlayer] += roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

            var input = document.querySelector('.winning-score').value;
            console.log(input);

            //if the user doesn't enter a value we don't use the input value
            //all values of undifined, 0, null or "" are coerced to false
            if(input){
                var winningScore = input;
            } else {
                winningScore = 100;
            }

            //check if player won the game
            if (scores[activePlayer] >= winningScore){
                //declare the winner
                document.getElementById('name-' + activePlayer).textContent = 'winner!';

                //change the style
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                document.querySelector('.dice').style.display = 'none';

                //change the gameplaying to false
                gamePlaying = false;

            } else {
                nextPlayer();
            }
        }



});

//to reset the entire score after hitting two 6 in a row

function resetScore(){
    //to rest the entire score in the UI
    scores[activePlayer] = 0;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer] ;

    //to make the other player play
    nextPlayer();
}

function nextPlayer(){
    //set the current to 0 in the UI
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //update the UI
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //make the other player play
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore =0;

    //hide the dice again
    var diceImg = document.getElementsByClassName('dice');
    for(var i = 0; i < diceImg.length; i++){
        diceImg[i].style.display = 'none' 
    }
}


document.querySelector('.btn-new').addEventListener('click', init);

//initialization function
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    var diceImg = document.getElementsByClassName('dice');
    for(var i = 0; i < diceImg.length; i++){
        diceImg[i].style.display = 'none' 
    }
    
    document.getElementById('score-0').textContent = '0' ;
    document.getElementById('score-1').textContent = '0' ;
    document.getElementById('current-0').textContent = '0' ;
    document.getElementById('current-1').textContent = '0' ;

    //change the name from winner to the initial names
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';

    //remove winner and return class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //adding active class to the first player
    // we did we remove it then? because we don't know who was the active player when the game ended
    document.querySelector('.player-0-panel').classList.add('active');
}