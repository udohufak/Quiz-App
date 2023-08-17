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
    let timeInSeconds = 50 * 60;

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