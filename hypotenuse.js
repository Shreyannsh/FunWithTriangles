var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

function calculateHypotenuse(){
    console.log("clicked");
    // var input1 = Number(side1.value);
    // var input2 = Number(side2.value);
    
    // hypotenuse = math.sqrt((input1*input1) + (input2*input2));
    // console.log(hypotenuse);
}

button.addEventListener("click",calculateHypotenuse);