var formAnswers = document.querySelector("#form");
var buttton = document.querySelector("button");
var output = document.querySelector("output");

const correctAnswers= ["90degree","right-angled","isosceles","second","90degree"];


function calculateScore(){
index=0;
score=0;
const data = new FormData(formAnswers);
 for(var value of data.values()){
    if(value === correctAnswers[index]){
        score = score+1;
    }
    index= index+1;
 }
 output.innerText= "Your score is :-" + score;
}

buttton.addEventListener("click",calculateScore);