function solve(array){
    const adresbook ={};


    for(const element of array){
        const[name,adress]=element.split(':');
        adresbook[name]=adress;
        
    }

    const peapaladres = Object.entries(adresbook).sort();

    for(const key of peapaladres){

        console.log(`${key[0]} -> ${key[1]}`)

    }


   
}
solve(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd'])