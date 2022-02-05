const quizData = [
    {
        question: "Q1- Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "Q2- Which was once considered to be a toy language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "Q3- Javascript is used to make:",
        a: "Mobile Apps",
        b: "Web Apps",
        c: "Desktop Apps",
        d: "All of the above",
        correct: "d",
    },

    {
        question: "Q4- Node is a popular backend framework of which language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "Q5- Javascript has a go-to framework for building desktop apps?",
        a: "Cordova",
        b: "Express",
        c: "Node",
        d: "Electron",
        correct: "d",
    },

    {
        question: "Q6- Which built-in method of JS combines the text of two strings and returns a new string?",
        a: "append()",
        b: "concat()",
        c: "attach()",
        d: "None of these",
        correct: "b",
    },
    {
        question: "Q7- What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Q8- What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Q9- What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Q10- What is npm?",
        a: "Package Manager",
        b: "Code Editor",
        c: "1994",
        d: "none of the above",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
const header = document.getElementById('header')
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

    header.innerText = `Question # ${currentQuiz+1} of 10 `
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