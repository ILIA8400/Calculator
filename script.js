const $ = document;
const input = $.querySelector("input");
let value = input.value;

let operator = "";
let number =0;
let result = 0;
let newOperation = false;


$.querySelector("#zero").addEventListener("click",()=>{
    value += 0;
    input.value = value;
});

$.querySelector("#one").addEventListener("click",()=>{
    value += 1;
    input.value = value;
});

$.querySelector("#two").addEventListener("click",()=>{
    value += 2;
    input.value = value;
});

$.querySelector("#three").addEventListener("click",()=>{
    value += 3;
    input.value = value;
});

$.querySelector("#four").addEventListener("click",()=>{
    value += 4;
    input.value = value;
});

$.querySelector("#five").addEventListener("click",()=>{
    value += 5;
    input.value = value;
});

$.querySelector("#six").addEventListener("click",()=>{
    value += 6;
    input.value = value;
});

$.querySelector("#seven").addEventListener("click",()=>{
    value += 7;
    input.value = value;
});

$.querySelector("#eight").addEventListener("click",()=>{
    value += 8;
    input.value = value;
});

$.querySelector("#nine").addEventListener("click",()=>{
    value += 9;
    input.value = value;
});


$.querySelector("#dot").addEventListener("click",()=>{
    value += ".";
    input.value = value;
});

//==========================================


$.querySelector("#clear").addEventListener("click",()=>{
    number = 0;
    input.value = "";
    value = input.value;
});


//=============================================


$.querySelector("#plus").addEventListener("click",()=>{
   
    number = parseFloat(value);
    operator = "plus";
    value = "";
    input.value = value;
    
});

$.querySelector("#minus").addEventListener("click",()=>{
    number = parseFloat(value);
    operator = "minus";
    value = "";
    input.value = value;
});

$.querySelector("#times").addEventListener("click",()=>{
    number = parseFloat(value);
    operator = "times";
    value = "";
    input.value = value;
});

$.querySelector("#division").addEventListener("click",()=>{
    number = parseFloat(value);
    operator = "division";
    value = "";
    input.value = value;
});

$.querySelector("#equ").addEventListener("click",()=>{

    calc();
    number = 0;
    input.value = result;
    value = input.value;
});


//=============================


function calc(){

    if(operator == "plus")
        result = parseFloat(input.value) + number;
    else if(operator == "minus")
        result = number - parseFloat(input.value);
    else if(operator == "times")
        result = number * parseFloat(input.value);
    else if(operator == "division")
        result = number / parseFloat(input.value);

    operator = "";
}