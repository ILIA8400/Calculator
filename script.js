const $ = document;
const input = $.querySelector("input");
let value = input.value;

let number ="";
let number2 = "";
let result = "";



$.querySelector("#zero").addEventListener("click",()=>{
    value += "0";
    input.value = value;
});

$.querySelector("#one").addEventListener("click",()=>{
    value += "1";
    input.value = value;
});

$.querySelector("#two").addEventListener("click",()=>{
    value += "2";
    input.value = value;
});

$.querySelector("#three").addEventListener("click",()=>{
    value += "3";
    input.value = value;
});

$.querySelector("#four").addEventListener("click",()=>{
    value += "4";
    input.value = value;
});

$.querySelector("#five").addEventListener("click",()=>{
    value += "5";
    input.value = value;
});

$.querySelector("#six").addEventListener("click",()=>{
    value += "6";
    input.value = value;
});

$.querySelector("#seven").addEventListener("click",()=>{
    value += "7";
    input.value = value;
});

$.querySelector("#eight").addEventListener("click",()=>{
    value += "8";
    input.value = value;
});

$.querySelector("#nine").addEventListener("click",()=>{
    value += "9";
    input.value = value;
});

//==========================================


$.querySelector("#clear").addEventListener("click",()=>{
    value = "";
    number = "";
    input.value = value;
});

//=============================================


$.querySelector("#plus").addEventListener("click",()=>{
    number = value;
    value = "";
    input.value = value;
});

$.querySelector("#minus").addEventListener("click",()=>{
    value = "";
    input.value = value;
});

$.querySelector("#times").addEventListener("click",()=>{
    value = "";
    input.value = value;
});

$.querySelector("#division").addEventListener("click",()=>{
    value = "";
    input.value = value;
});

$.querySelector("#equ").addEventListener("click",()=>{
    
    input.value = number;
});

//=======================

function calculator(){
    
    result = number + input.value
    
    return result;
}