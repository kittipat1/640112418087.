let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

function pressNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function pressOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function pressDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = 0;
    }
    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}