// ################## Looping ##################\

const numbers = [1,2,3,4,5,6,7,8];
const cars = ["Toyota","Fiat","Ford","BMW","Audi","Mercedes"];


// For Loop 
for(let i = 0; i < cars.length(),i++;){
    console.log(cars[i]);
}

// For In Loop --> Accesses the Key (index)
for( number in numbers){
    console.log(number);
}

// For Of Loop --> Accesses the value (value)
for (car of cars){
    console.log(car);
}

// While Loop
let i = 0;
while(i < cars.length()){
    console.log(cars[i]);
    i++;
}