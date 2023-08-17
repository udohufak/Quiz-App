function Answer () {
    var x = document.getElementsByClassName("option");
    for (var i = 0; i < x.length; i++) {
      x[i].disabled = "true";
      x[i].style.backgroundColor = 'red';
      x[i].style.color = 'white';
    }
    document.getElementById('right-el').style.backgroundColor = 'green';
}    

function startCountdown () {
    document.getElementById('quiz_box').style.display = 'block';
    let timeInSeconds = 20 * 60;

let countdownElement = document.getElementById("countdown");

// Update the countdown every second
let countdownInterval = setInterval(function() {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;

    // Add leading zero if necessary
    let formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    // Update the countdown element
    countdownElement.textContent = formattedTime;

    // Decrement the time
    timeInSeconds--;

    // Check if countdown is done
    if (timeInSeconds < 0) {
        clearInterval(countdownInterval); // Clear the interval
        countdownElement.textContent = "Countdown done!";
    }
}, 1000); // 1000 milliseconds = 1 second

}
let questions = [
    {
        question: "What is JavaSipt?",
        options: ["A type of coffee", "A programming language", "A type of browser", "A new software release"],
        correctAnswer: "A programming language"
    },
    {
        question: "What is Javat?",
        options: ["A type of coffee", "A programming language", "A type of browser", "A new software release"],
        correctAnswer: "A programming language"
    },
    // Add more questions here
];

let questionIndex = 0;
let queTextElement = document.getElementById("que_text").querySelector("span");
let optionButtons = document.querySelectorAll(".option");
let questionNumberElement = document.getElementById("q-num");

function displayQuestion(index) {
    let currentQuestion = questions[index];
    queTextElement.textContent = currentQuestion.question;

    questionNumberElement.textContent = (index + 1) + " of " + questions.length + " Questions";
}


function nextQuestion() {
    questionIndex = (questionIndex + 1) % questions.length;
    displayQuestion(questionIndex);
}

displayQuestion(questionIndex);


