function factorialDivision(num1, num2) {
    const factorial = (num) => {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    };

    const factorial1 = factorial(num1);
    const factorial2 = factorial(num2);

    const result = factorial1 / factorial2;

   
    const formattedResult = result.toFixed(2);

    return formattedResult;
}


console.log(factorialDivision(5, 2)); 