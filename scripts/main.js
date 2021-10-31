// let user = "John";
// let admin = user;
// alert(admin);



// let JsName = prompt("Какое 'официальное название' JavaScript?", "");
// if (JsName == "ECMAScript") {
//     alert("Правильно!");
// } else {
//     alert("Не знаете? “ECMAScript”");
// }



// let result = prompt("Введите число!", "");
// if (result > 0) {
//     alert(1);
// } else if (result < 0) {
//     alert(-1);
// } else if (result == 0) {
//     alert(0)
// } else {
//     alert("Введите число!")
// }



//                                    Находится от 14 до 90
// let age = prompt("Введите число", "");
// if (age >= 14 && age <= 90) {
//     alert("Работает");
// } else {
//     alert("Try again");
// }
//  находится до 14 и после 90
// let age = prompt("Введите число", "");
// if (age <= 14 || age >= 90) {
//     alert("Работает");
// } else {
//     alert("Try again");
// }




// let user = prompt('Кто там?', '');

// if (user == "admin") {
//     let password = prompt('Пароль?', '');
//     if (password == 'I Boss') {
//         alert('Здравствуйте!');
//     } else if (password == '' || password == null) {
//         alert('Отменено!');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (user == '' || user == null) {
//     alert('Отменено!');
// } else {
//     alert('Я вас не знаю');
// }





// let a;
// let b;
// let sum
// let min
// let multi
// let divis

// function calc()






















//  КАЛЬКУЛЯТОР

let a = prompt("Введите первую переменную(число)");
let b = prompt("Введите вторую переменную(число)");
let operator = prompt("Введите оператор(знак +, -, * или /)");

function calc(a, b, operant) {
    if (operator == ("+")) {
        alert(a * 1 + b * 1);
    }
    else if (operator == ("-")) {
        alert(a - b);
    } else if (operator == ("*")) {
        alert(a * b);
    } else if (operator == ("/")) {
        alert(a / b);
    } else if (a == "" || b == "" || operant == "" || typeof a !== Number || typeof b !== Number) {
        alert("Error");
    } else {
        alert("unknown operation");
    }
}

calc(a, b, operator);




// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

