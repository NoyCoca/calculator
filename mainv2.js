let number1;
let Cop;
let sum;
function number1F(event) {
    if(printNumber.innerHTML == "/" ||printNumber.innerHTML == "+" || printNumber.innerHTML == "-" || printNumber.innerHTML == "*"){
        printNumber.innerHTML =""
    }
    if(sum){
        sum = 0;
        printNumber.innerHTML = ""
    }

    printNumber.innerHTML += event.target.value; 
}

function oprator(event) {
    number1 = printNumber.innerHTML;
    printNumber.innerHTML = event.target.value;
    Cop = printNumber.innerHTML;

}
function equal() {
    
    if(Cop == "/"){
        sum = Number(number1) / Number(printNumber.innerHTML);
    }
    if(Cop == "*"){
        sum = Number(number1) * Number(printNumber.innerHTML);
    }
    if(Cop == "+"){
        sum = Number(number1) + Number(printNumber.innerHTML);
    }
    if(Cop == "-"){
        sum = Number(number1) - Number(printNumber.innerHTML);
    }
    
    printNumber.innerHTML = Number(sum);
}

function Deletion() {
    number1 = "";
    printNumber.innerHTML = "";
}