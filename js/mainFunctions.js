//Basic Math Operators
function add(numA, numB){
    return numA + numB;
}

function subtract(numA, numB){
    return numA - numB;
}

function multiply(numA, numB){
    return numA * numB;
}

function divide(numA, numB){
    return numA / numB;
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
        default:
            alert('Not an operator!');
    }
}