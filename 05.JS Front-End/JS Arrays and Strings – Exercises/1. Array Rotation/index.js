function rotation(array,rotations){
    for (let index = 0; index < rotations; index++) {
        let elementstake= array.shift();
        array.push(elementstake);
        
        
    }
    console.log(array.join(' '));
}
rotation([51, 47, 32, 61, 21], 2)