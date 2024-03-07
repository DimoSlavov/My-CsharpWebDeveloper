

function calculate(num1, num2, operator) {
        const calculator = {
            multiply: (num1, num2) => num1 * num2,
            divide: (num1, num2) => num1 / num2,
            add: (num1, num2) => num1 + num2,
            subtract: (num1, num2) => num1 - num2
        };
        if (!(operator in calculator)) {
            console.log("Invalid operator");
            return;
        }
        console.log(calculator[operator](num1, num2));
    }

    calculate(5,
    5,
    'multiply');