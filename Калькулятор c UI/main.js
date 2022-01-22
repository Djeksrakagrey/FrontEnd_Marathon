import { drop, result, numbers, total, backspace, operators } from './view.js';

let firstNum = null;
let secondNum = null;
let operator = null;
let clickOperator = null;

function dropResult() {
    result.innerHTML = '0';
    firstNum = null;
    secondNum = null;
    operator = null;
};

drop.addEventListener('click', dropResult);

function backspaceResult() {
    const resultLength = result.innerHTML.length;

    if (resultLength === 1) {
        result.innerHTML = '0';
    } else {
        result.innerHTML = result.innerHTML.slice(0, resultLength - 1);
    }
};

backspace.addEventListener('click', backspaceResult);

for (let number of numbers) {
    number.addEventListener('click', function () {
        if (result.innerHTML != 0 && result.innerHTML != clickOperator) {
            result.innerHTML += number.innerHTML;
        }
        else {
            result.innerHTML = number.innerHTML;
        }

    })
};

for (let symbol of operators) {
    symbol.addEventListener('click', function () {
        operator = symbol.id;

        switch (operator) {
            case 'sum':
                clickOperator = '+';
                break;

            case 'sub':
                clickOperator = '-';
                break;

            case 'multi':
                clickOperator = '*';
                break;

            case 'div':
                clickOperator = '/';
                break;
        }

        if (firstNum === null) {
            firstNum = result.innerHTML;
            result.innerHTML = clickOperator;
        } else if (secondNum === null) {
            secondNum = result.innerHTML;
        }

    })
};

total.addEventListener('click', function () {
    secondNum = result.innerHTML;
    result.innerHTML = calc(firstNum, secondNum, operator);
    firstNum = null;
    secondNum = null;
    clickOperator = null;

})


function calc(firstNum, secondNum, operator) {
    switch (operator) {
        case 'div':
            if (secondNum === '0') {
                return 'Error';
            } else {
                return firstNum / secondNum;
            }
        case 'multi':
            return firstNum * secondNum;
        case 'sum':
            return +firstNum + +secondNum;
        case 'sub':
            return firstNum - secondNum;
    }
};






    // const isNotValid = typeof firstNum !== 'number' || typeof secondNum !== 'number' || operator === '';

    // operators = {
    //     sum: firstNum + secondNum,
    //     sub: firstNum - secondNum,
    //     multi: firstNum * secondNum,
    //     div: firstNum / secondNum,
    // }

    // if (isNotValid) {
    //     return "Error";
    // }
    // if (operator in operators) {
    //     return operators[operator];
    // } else {
    //     return "unknown operation";
    // }
// };




