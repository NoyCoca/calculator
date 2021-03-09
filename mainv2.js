let number1;
let Cop;
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
    Cop = printCalc.innerHTML;

}
function equal() {
    
    if(Cop == "/"){
        sum = Number(number1) / Number(printCalc.innerHTML);
    }
    if(Cop == "*"){
        sum = Number(number1) * Number(printCalc.innerHTML);
    }
    if(Cop == "+"){
        sum = Number(number1) + Number(printCalc.innerHTML);
    }
    if(Cop == "-"){
        sum = Number(number1) - Number(printCalc.innerHTML);
    }
    
    printCalc.innerHTML = Number(sum);
}

function Deletion() {
    number1 = "";
    printCalc.innerHTML = "";
}