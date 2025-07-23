// let score = 0; // Assume this variable gets updated during the quiz
const totalQuestions = 4; // Total number of questions in the quiz

// Function to handle quiz submission
function submitQuiz() {
    // Calculate efficiency
    const efficiency = (score / totalQuestions) * 100;

    // Prepare results content
    const resultsContent = `
        <h3>Quiz Results</h3>
        <p>Score: ${score} / ${totalQuestions}</p>
        <p>Efficiency: ${efficiency.toFixed(2)}%</p>
    `;

    // Get results container and set its innerHTML
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = resultsContent;
    resultsContainer.style.display = "block"; // Show results container

    // Optionally, hide the quiz container
    document.getElementById("quiz-container").style.display = "none";
}

// Example function to update score (this should be part of your quiz logic)
function updateScore() {
    score++; // Increment score based on correct answers
}

const questions = [
    {
        question: "Which company is known for creating the first smartphone, the IBM Simon, released in 1994?",
        answers: [
            { text: "Nokia", correct: false },
            { text: "IBM", correct: true },
            { text: "Apple", correct: false },
            { text: "Samsung", correct: false }
        ]
    },
    {
        question: "What was the first search engine ever created, launched in 1990?",
        answers: [
            { text: "Yahoo", correct: false },
            { text: "Lycos", correct: false },
            { text: "Architext", correct: true },
            { text: "Google", correct: false }
        ]
    },
    {
        question: "In 2013, which social media platform suffered a major data breach, compromising the accounts of millions of users?",
        answers: [
            { text: "Twitter", correct: false },
            { text: "Facebook", correct: false },
            { text: "LinkedIn", correct: true },
            { text: "Instagram", correct: false }
        ]
    },
    {
        question: "Which spacecraft, launched by NASA in 1977, is the farthest human-made object from Earth?",
        answers: [
            { text: "Apollo 11", correct: false },
            { text: "Voyager 1", correct: true },
            { text: "Hubble Space Telescope", correct: false },
            { text: "Mars Rover", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Corrected class name
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Woohoo!! You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Give It Another Go!';
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


document.getElementById('start-quiz-btn').addEventListener('click', () => {
    window.location.href = 'quiz.html'; 
});
