const num = document.getElementsByClassName('num');
const opt = document.getElementsByClassName('operator');
const input = document.querySelector('input');
const equal = document.getElementById('equals')
let numA, numB, operator;

//Basic Math Operators
function add(numA, numB){
    input.value = Number(numA) + Number(numB);
}

function subtract(numA, numB){
    input.value = Number(numA) - Number(numB);
}

function multiply(numA, numB){
    input.value = Number(numA) * Number(numB);
}

function divide(numA, numB){
    input.value = Number(numA) / Number(numB);
}

//Operate takes an operator and 2 numbers, then calls one of the above functions
function operate(operator, numA, numB){
    switch(operator){
        case '+': add(numA, numB);
        break;
        case '-': subtract(numA, numB);
        break;
        case '*': multiply(numA, numB);
        break;
        case '/': divide(numA, numB);
        break;
        default:
            alert('Not an operator!');
    }
}

//Function that populates the display when clicking the number buttons

[...num].forEach(e => e.addEventListener('click', function(){
    input.value += e.textContent;
}));

[...opt].forEach(e => e.addEventListener('click', function(){
    input.value += e.textContent;
    numA = input.value.slice(0, 1);
    operator = input.value.slice(-1);
}));

equal.addEventListener('click', function(){
    numB = input.value.slice(-1);
    operate(operator, numA, numB);
});

//Clears the display when the 'C' is pressed
const clear = document.getElementById('clear');

clear.addEventListener('click', function(){
    input.value = '';
});

//Deletes last character when the '=>' is pressed
const back = document.getElementById('backspace');

back.addEventListener('click', function(){
    let str = input.value;
    let temp = str.slice(0, str.length-1);
    input.value = temp;
});