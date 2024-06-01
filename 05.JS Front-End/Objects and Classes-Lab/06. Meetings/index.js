function meetings(array){
    const meting ={};


    for(const element of array){
        const[day,number]=element.split(' ');

        if(!meting.hasOwnProperty(day)){
            meting[day]=number;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`)
        }
    }

    Object.keys(meting).forEach((day)=>{console.log(`${day} -> ${meting[day]}`);});
}   