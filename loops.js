const orders = [500, 30, 99, 14, 20];

//bad code

const total = 0;
const withTax = [];
const highValue = [];

for(i = 0; i<orders.length; i++){
    //reduce
    total += orders[i];
    
    //map
    withTax.push(orders[i] * 1.1);
    
    //filter
    if(orders[i] > 100){
        highValue.push(orders[i]);
    }    
}


//good loop code

//reduce
const total = orders.reduce((acc, cur ) => acc+cur);
//map
const withTax = orders.map(v => v * 1.1);
//filter 
const highValue = orders.filter(v => v >100);