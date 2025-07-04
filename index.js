import { result } from "./result.js";
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const operation = document.getElementById('operator');
const button = document.getElementById('button');
const writeResult = document.getElementById('write_result');
// const result = document.getElementById('result');
function returnResult(n1, n2, op) {
   switch (op) {
        case '+':
            return result(parseFloat(n1), parseFloat(n2), (a, b) => a + b);
        case '-':
            return result(parseFloat(n1), parseFloat(n2), (a, b) => a - b);
        case '*':
            return result(parseFloat(n1), parseFloat(n2), (a, b) => a * b);
        case '/':
            return result(parseFloat(n1), parseFloat(n2), (a, b) => a / b);
        default:
            return 'Invalid operation';
    }
}

document.addEventListener('input',() => {
button.addEventListener('click', () => {
    writeResult.innerHTML = `результат: ${returnResult(firstNumber.value, secondNumber.value, operation.value)}`;
    console.log(`результат: ${returnResult(firstNumber.value, secondNumber.value, operation.value)}`);
})
})

