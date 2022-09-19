var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var isTriangle = document.querySelector("#btn");

function calculateSumOfTriangles(){
    input1 = angle1.value;
    input2 = angle2.value;
    input3 = angle3.value;

    var sum = Number(input1) + Number(input2) + Number(input3);

    
    if(sum ===180){
        output.innerText = "Yah! These angles will form a Triangle";
    }
    else{
        output.innerText = "Oops! These angles do not form a Triangle";
    }

}


isTriangle.addEventListener("click",calculateSumOfTriangles)
