function solve(words){

    let input = words.shift().split(' ');

    let curent = {};

     
   input.forEach(elements => {

    curent[elements]=0;

    words.forEach((element)=>{
        if(element===elements){
            curent[element]+=1;
        }
    })
    
   });

   let sum =Object.entries(curent).sort((a,b)=>b[1]-a[1]);


   for(const [key,value] of sum){
       console.log(`${key} - ${value}`);

   }


    

}
solve([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task']);