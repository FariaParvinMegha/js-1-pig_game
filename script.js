var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        // 3. update the score IF rolled number is NOT a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add currentScore to globalScore
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        // check if the player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
            document.querySelector('.dice').style.display = 'none';
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

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

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