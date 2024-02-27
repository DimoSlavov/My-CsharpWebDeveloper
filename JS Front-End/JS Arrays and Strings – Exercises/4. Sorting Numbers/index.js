function solve(numbers) {
let result=[];
let sorted = numbers.sort((a, b) => a - b);
let sortedlengt=numbers.length;

for (let index = 0; index < sortedlengt; index++) {
    
    if(index %2==0){
        result.push(sorted.shift())
    }else {
        result.push(sorted.pop())

    }
}
return(result);
    
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])