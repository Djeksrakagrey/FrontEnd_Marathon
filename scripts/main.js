let a = prompt("Введите первую переменную(число");
let b = prompt("Введите вторую переменную(число");
let operant = prompt("Введите оператор(знак сложения, умножения и т.д.");

function calc(a, b, operant) {
    if (operant === "+") {
        alert(a + b);
    }
    else if (operant == "-") {
        alert(a - b);
    } else if (operant == "*") {
        alert(a * b);
    } else if (operant == "/") {
        alert(a / b);
    } else if (a == "" || b == "" || operant == "" || typeof a !== Number || typeof b !== Number) {
        alert("Error");
    } else {
        alert("unknown operation");
    }
}

calc(a, b, operant);

