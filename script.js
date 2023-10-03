var timerInterval;
var secondsLeft = 10;
var timeEl = document.querySelector("#Clock");

var StartButton = document.getElementById(
    "Start-button"
)
StartButton.addEventListener(
    "click", function () {
        document.getElementById("Welcome").classList.add("Hidden")
        document.getElementById("Quiz").classList.remove("Hidden")
        startTimer()
    }
)
function startTimer(){
     timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
       
        }
    
      }, 1000);
}