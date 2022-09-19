var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

function calculateHypotenuse(){

    var input1 = Number(side1.value);
    var input2 = Number(side2.value);
    var hypotenuse = Math.sqrt((input1*input1) + (input2*input2));
    result = hypotenuse.toFixed(2);

    output.innerText= "The hypotenus is : " + result;

}


button.addEventListener("click",calculateHypotenuse);