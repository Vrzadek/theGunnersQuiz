const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull'); 

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
   {
        question: 'Which of these players is the top-scorer of all time?',
        choice1: 'Dennis Bergkamp',
        choice2: 'Ian Wright',
        choice3: 'Robin Van Persie',
        choice4: 'Thierry Henry',
        answer: 4,
   },
   {
        question: 'Who has most appearances for Arsenal?',
        choice1: 'Lee Dixon',
        choice2: 'David Seaman',
        choice3: 'David O Leary',
        choice4: 'George Armstrong',
        answer: 3,
   },
   {
        question: 'Who was the player known for his "red hair"?',
        choice1: 'Robert Pires',
        choice2: 'Freddie Ljungberg',
        choice3: 'Emmanuel Petit',
        choice4: 'Gaël Clichy',
        answer: 2,
   },
   {
        question: 'Where did Arsenal play before Emirates?',
        choice1: 'Flybury',
        choice2: 'Conbury',
        choice3: 'Lighbury',
        choice4: 'Highbury',
        answer: 4,
   },
   {
        question: 'Youngest player to ever play a game for Arsenal?',
        choice1: 'Ethan Nwaneri',
        choice2: 'Jack Wilshere',
        choice3: 'Cesc Fàbregas',
        choice4: 'Bukayo Saka',
        answer: 1,
   }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question 

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>  {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})


incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();