function solve(array) {
    const pfonebook = {};

    for(const element of array){
        const[name,number] = element.split(' ');
        pfonebook[name]=number;
    }

    for(const key in pfonebook){
        console.log(`${key} -> ${pfonebook[key]}`);
    }
    
    
}
solve(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344'])