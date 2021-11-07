// TODO ЛИСТ

const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = "To Do";
};

function deleteTask(task) {
    delete list[task];
};

function showList() {

    let count = 0;

    console.log("To Do:")
    for (task in list) {
        if (list[task] === "To Do") {
            console.log(` "${task}" `);
            count++;
        }
    }

    if (count === 0) {
        console.log("-");
    }


    console.log("In Progress:")
    for (task in list) {
        if (list[task] === "In Progress") {
            console.log(` "${task}" `);
            count++;
        }
    }

    if (count === 0) {
        console.log("-");
    }

    console.log("Done:")
    for (task in list) {
        if (list[task] === "Done") {
            console.log(` "${task}" `);
            count++;
        }
    }

    if (count === 0) {
        console.log("-");
    }

};

addTask("Go to sleep");
addTask("Play in PS5");
changeStatus("write a post", "Done");
changeStatus("Play in PS5", "In Progress");
deleteTask("Go to sleep")
showList();




















//  КАЛЬКУЛЯТОР


// function calc(a, b, operator) {
//     const isNotValid = typeof a !== 'number' || typeof b !== 'number' || operator === '';
//     let operators = {
//         sum: a + b,
//         sub: a - b,
//         multi: a * b,
//         div: a / b,
//     }

//     if (isNotValid) {
//         return "Error";
//     } else if (operator in operators) {
//         return operators[operator];
//     } else {
//         return "unknown operation";
//     }

// };

// console.log(calc(77, 55, "sub"));

//



// function calc(a, b, operator) {
//     let result
//     const isNotValid = a == "" || b == "" || operator == "" || typeof a !== 'Number' || typeof b !== 'Number';
//     if (operator === "+") {
//         result = a + b;
//     }
//     else if (operator === "-") {
//         result = a - b;
//     } else if (operator === "*") {
//         result = a * b;
//     } else if (operator === "/") {
//         result = a / b;
//     } else if (isNotValid) {
//         result = "Error";
//     } else {
//         result = "unknown operation";
//     }
//     return result;
// }

// console.log(calc(5, 4, "*"));



// function calc(a, b, operator) {
//     const isNotValid = a == "" || b == "" || operator == "" || typeof a !== 'Number' || typeof b !== 'Number';

//     if (isNotValid) {
//         return "Error";
//     } else {

//         switch (operator) {
//             case "+":
//                 return a + b;

//             case "-":
//                 return a - b;

//             case "*":
//                 return a * b;

//             case "/":
//                 return a / b;

//             default: return "unknown operation";
//         }
//     }
// }

// console.log(calc(5, 5, "+"));

















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
