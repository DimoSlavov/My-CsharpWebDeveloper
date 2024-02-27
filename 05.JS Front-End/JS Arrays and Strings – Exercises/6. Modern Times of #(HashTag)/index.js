function solve(text){
    let arrwords = text.match(/#[a-zA-Z]+/g).map((x) => x.slice(1));
    console.log(arrwords.join("\n"));



}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');