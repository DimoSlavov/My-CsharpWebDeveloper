function calculate(num1, num2, num3) {   
        const negativeCount = [num1, num2, num3].filter(num => num < 0).length;
        const result = negativeCount % 2 === 0 ? "Positive" : "Negative";
    
        console.log(result);
    

}
calculate(5,12,-15);
calculate(-6,-12, 14);