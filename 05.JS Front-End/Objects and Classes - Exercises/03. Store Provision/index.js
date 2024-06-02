function solve(stock,delivery){
    
    const store = {};

for (let index = 0; index < stock.length; index+=2) {
    let product =stock[index];
    let quantytu =Number(stock[index+1]);

    store[product] =quantytu;
   
}
for (let index = 0; index < delivery.length; index+=2) {
    let product =delivery[index];
    let quantytu =Number(delivery[index+1]);

    
    if(!store[product]){
        store[product] =0;
    }
    
    store[product] +=quantytu;
}

for(const product in store){
    console.log(`${product} -> ${store[product]}`);
}
        
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30' ])