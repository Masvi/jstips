const dog = {
    name: 'Kobe',
    legs: 4,
    type: 'mammal',
    wheight: 12
}

//bad code
function feedBad(animal){
    return  `Feed ${animal.name} ${animal.legs} Kilos of ${animal.wheight}`; 
}


//good code
function feed({name, legs, wheight}){
    return  `Feed ${name} ${legs} Kilos of ${wheight}`; 
}