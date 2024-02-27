function solve(name,input) {

    let names = name.split(', ')
    let inputar = input.split(' ')

    for (let index = 0; index < names.length; index++) {
        for (let j = 0; j < inputar.length; j++) {
            
            if(inputar[j].includes('*')&&inputar[j].length===names[index].length){
                inputar[j]=names[index];
            }
        }
        
    }
    console.log(inputar.join(' '))
}
solve('great','softuni is ***** place for learning new programming languages')