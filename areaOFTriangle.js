var base = document.querySelector("#base");
var height = document.querySelector("#height");
var areaButton = document.querySelector("#areaButton");
var output = document.querySelector("#output");

function calculateArea() {
    input1 = Number(base.value);
    input2 = Number(height.value);

    if (input1 && input2 > 0) {
        area = 0.5 * (input1 * input2);
        output.innerText = "The area of Triangle is : " + area + "cm²";
    }
    else{
        output.innerText= "Kindly enter positive integer values for base and height both";
    }
}


areaButton.addEventListener("click", calculateArea);