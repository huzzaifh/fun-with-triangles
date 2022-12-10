var quizForm=document.querySelector(".quiz-Form");
var buttonClick=document.querySelector("#button-input");
var answer=document.querySelector("#answer");
var correctAnswer=["90","right angled"];

buttonClick.addEventListener("click", calculateScore)

function calculateScore(){
      var score=0;
      var index=0;
      var formResult= new FormData(quizForm);
      for(let value of formResult.values()){
        if (value===correctAnswer[index]){
            score=score+1;
        }
        index=index+1;
      }
      answer.innerText="Your Score is "+score;



}