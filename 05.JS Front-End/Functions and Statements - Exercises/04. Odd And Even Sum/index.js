function solve(number) {
    let evenSum = 0;
    let oddSum = 0;

    
    const digits = String(number);

   
    for (let digit of digits) {
        
        digit = parseInt(digit);

        
        if (digit % 2 === 0) {
            evenSum += digit; 
        } else {
            oddSum += digit; 
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
solve(1000435);

