const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = `Final Score ${mostRecentScore}`;

username.addEventListener('keyUp', () => {
    saveScoreBtn.disabled = !username.value;
});

const saveHighScore = e => {
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    alert('Your score saved');
    window.location.assign('index.html');
};


document.getElementById('saveScoreBtn').addEventListener('click', saveHighScore);






