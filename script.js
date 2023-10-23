var timerInterval;
var secondsLeft = 10;
var timeEl = document.querySelector("#Clock");
var question = [
  {
    question: "what question goes here?",
    options: [" A", "B", "C", "D"],
    key: "B"
  },
  {
    question: "what question goes here?",
    options: [" A", "B", "C", "D"],
    key: "B"
  },
  {
    question: "what question goes here?",
    options: [" A", "B", "C", "D"],
    key: "B"
  },
  {
    question: "what question goes here?",
    options: [" A", "B", "C", "D"],
    key: "B"
  },

]
var level = 0
var questionElements =document.getElementById("Question")
var answerElements =document.getElementById("Answer-Generator")

var StartButton = document.getElementById(
    "Start-button"
)
StartButton.addEventListener(
    "click", function () {
        document.getElementById("Welcome").classList.add("Hidden")
        document.getElementById("Quiz").classList.remove("Hidden")
        startTimer()
        QuestionDisplay()
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
function QuestionDisplay(){
  questionElements.textContent=question[level].question
  answerElements.innerHTML=""
  for (var i = 0; i < question [level].options.length; i++) {
    var button=document.createElement("button")
    button.textContent=question [level].options[i]
    button.onclick = AnswerCheck
answerElements.append(button)
  }
}
function AnswerCheck(){
  console.log(this)
  if (this.textContent===question [level].key) {
    console.log ("correct")
    } else {
    console.log("wrong")
  }
  level++
  QuestionDisplay()
}