let number1;
let opertor;
let sum;
function number1F(event) {
    if(printCalc.innerHTML == "/" ||printCalc.innerHTML == "+" || printCalc.innerHTML == "-" || printCalc.innerHTML == "*"){
        printCalc.innerHTML =""
    }
    if(sum){
        sum = 0;
        printCalc.innerHTML = ""
    }
    printCalc.innerHTML += event.target.value; 
}

function oprator(event) {
    
    number1 = printCalc.innerHTML;
    printCalc.innerHTML = event.target.value;
    opertor = printCalc.innerHTML;
   
}
function equal() {

    if(opertor == "/"){
        sum = Number(number1) / Number(printCalc.innerHTML);
    }
    if(opertor == "*"){
        sum = Number(number1) * Number(printCalc.innerHTML);
    }
    if(opertor == "+"){
        sum = Number(number1) + Number(printCalc.innerHTML);
    }
    if(opertor == "-"){
        sum = Number(number1) - Number(printCalc.innerHTML);
    }


    printCalc.innerHTML = Number(sum);

}

function Deletion() {
    number1 = "";
    printCalc.innerHTML = "";
}
let content;
let contentLength;
function DeletOneNumber() {
    content = printCalc.innerHTML;
    contentLength = content.length;
    printCalc.innerHTML = printCalc.innerHTML.substr(0, contentLength-1)
}