function solve(start, end){
    let sum='';
    let result=0;
    for(let i=start; i<=end; i++){
        result+=i;
        sum+=i+ ' ';
     
    }
    console.log(sum);
    console.log(`Sum: ${result}`);
}
solve(5,10)
solve(0,26)