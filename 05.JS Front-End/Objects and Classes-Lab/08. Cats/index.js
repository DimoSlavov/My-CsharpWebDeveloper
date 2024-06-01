function solve(array){
    let cats =[];

    class Cat{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        
        }
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(' ');
        const [name,age]=element;
        const newCt = new Cat(name,age);
        newCt.meow();
        cats.push(newCt);
    }

}