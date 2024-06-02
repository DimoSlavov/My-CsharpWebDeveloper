function solve(input){

    let cars =[];

    for(const car of input){
        let [direction, carNumber] = car.split(', ');

        if(direction==='IN'&& !cars.includes(carNumber)){
            cars.push(carNumber)

        }else if(direction==='OUT'&& cars.includes(carNumber)) {
            let index = cars.indexOf(carNumber);
            cars.splice(index,1)
        }

    }

    if(cars.length>0){

        let sorted = cars.sort((a,b)=>{
            return(a.localeCompare(b));
        });

        sorted.forEach(n=>console.log(n));

    }else{
        console.log(`Parking Lot is Empty`)
    }

}
solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);