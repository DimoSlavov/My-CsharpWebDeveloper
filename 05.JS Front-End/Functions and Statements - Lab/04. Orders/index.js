function solve(product,price){
    let totalprice;

    switch (product) {
        case "coffe":
            totalprice=1.5;
            break;
        case "water":
                totalprice=1.0;
                break; 
        case "coke":
            totalprice=1.4;
            break;  
        case "snacks":
            totalprice=2.0;
            break; 
        default:
                console.log("Invalid product.");
                return;
    
    }

    totalprice=totalprice*price;
    console.log(totalprice.toFixed(2))

}
solve("water", 5);