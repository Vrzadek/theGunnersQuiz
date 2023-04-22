const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyUp', () => {
    saveScoreBtn.disabled = !username.value;
});

document.getElementById('saveScoreBtn').addEventListener('click', saveHighScore);

saveHighScore = e => {
    // // e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);
    console.info(JSON.stringify(highScores));    //window.location.assign('index.html');
};






