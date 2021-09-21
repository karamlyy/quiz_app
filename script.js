const quizData = [
    {
        question: "1) 1 + 1 = ...",
        a: "1",
        b: "3",
        c: "0",
        d: "2",
        correct: "d",
    },
    {
        question: "2) The capital of Azerbaijan is ...",
        a: "Moscow",
        b: "Baku",
        c: "Khirdalan",
        d: "Guba",
        correct: "b",
    },
    {
        question: "3) 1 hour = ... seconds",
        a: "3600",
        b: "360",
        c: "3800",
        d: "24",
        correct: "a",
    },
    {
        question: "4) 4 - 5 = ...",
        a: "0",
        b: "-1",
        c: "9",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5) The Republic Day of Azerbaijan is ...",
        a: "October 18",
        b: "May 28",
        c: "November 9",
        d: "June 26",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})