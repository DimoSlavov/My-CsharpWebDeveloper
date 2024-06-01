function solve(firstname, lastName, hairColor){

    const person ={
        name:firstname,
        lastName: lastName,
        hairColor: hairColor
    };

    const jsonstring = JSON.stringify(person);

    console.log(jsonstring)

}

solve('George', 'Jones','Brown');