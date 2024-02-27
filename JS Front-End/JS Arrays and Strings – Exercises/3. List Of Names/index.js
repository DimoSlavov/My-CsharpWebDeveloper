function solve(names){
     names.sort((a,b)=>{return a.localeCompare(b);});
     let index=1;

     for(const name of names){
        console.log(`${index}.${name}`);
        index++;
     }
}
solve(["John", "Bob", "Christina", "Ema"]);