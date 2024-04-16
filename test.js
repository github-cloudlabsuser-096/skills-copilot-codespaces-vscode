const prompt = require('prompt-sync')();

function calculator() {
    const num1 = Number(prompt('Enter the first number: '));
    const operation = prompt('Enter the operation (add, subtract, multiply, divide): ');
    const num2 = Number(prompt('Enter the second number: '));

    switch(operation) {
        case 'add':
            console.log('Result: ', num1 + num2);
            break;
        case 'subtract':
            console.log('Result: ', num1 - num2);
            break;
        case 'multiply':
            console.log('Result: ', num1 * num2);
            break;
        case 'divide':
            if(num2 !== 0) {
                console.log('Result: ', num1 / num2);
            } else {
                console.log('Error: Division by zero is not allowed.');
            }
            break;
        default:
            console.log('Error: Invalid operation.');
    }
}

calculator();