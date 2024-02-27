function solve(word,text){

    let words = text.toLowerCase().split(' ');
    let output =  `${word} not found!`

    for (let index = 0; index < words.length; index++) {
        let element = words[index];

        if(element===word){
            output=element;
        }
        
    }
    console.log(output);

}
solve('javascript','JavaScript is the best programming language');