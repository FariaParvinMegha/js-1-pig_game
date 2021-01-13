var score, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2.display the result
        document.getElementById('dice-1').style.display = "block";
        document.getElementById('dice-2').style.display = "block";
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        // 3. update the score IF rolled number is NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }

        /* if (dice === 6 && lastDice === 6) {
            //player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
            nextPlayer()
        }
        else if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
        lastDice = dice; */

    }

});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add currentScore to globalScore
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // undefined, 0, null or "" are FALSE
        // Anything else is true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }


        // check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!!'; 
            document.getElementById('dice-1').style.display = "none";
            document.getElementById('dice-2').style.display = "none";
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying = false;
        } else {
            // next player
            nextPlayer();
        }
    }

});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;           /*jodi ekhon activeplayer=0 thake tahole (dice=1 uthle)/(hold press korle) activeplayer=1 banaye daw. ohterwise activepalyer=0 banaye daw.*/
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    // document.querySelector('.player--0').classList.remove('player--active');
    // document.querySelector('.player--1').classList.add('player--active');

    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";
};

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

};



