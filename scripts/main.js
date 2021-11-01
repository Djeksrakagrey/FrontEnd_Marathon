//  КАЛЬКУЛЯТОР


function calc(a, b, operator) {
    let result
    const isNotValid = a == "" || b == "" || operator == "" || typeof a !== 'Number' || typeof b !== 'Number';
    if (operator === "+") {
        result = a + b;
    }
    else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    } else if (isNotValid) {
        result = "Error";
    } else {
        result = "unknown operation";
    }
    return result;
}

console.log(calc(5, 4, "*"));




















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







// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

