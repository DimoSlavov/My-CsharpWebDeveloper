function solve(array){
    

    for (const curent of array) {

        let [town,latitude,longitude]= curent.split(' | ')

        let info = {
            town, latitude:Number(latitude).toFixed(2)
            , longitude:Number(longitude).toFixed(2)
        };
        
       
        console.log(info)
        
    }



}