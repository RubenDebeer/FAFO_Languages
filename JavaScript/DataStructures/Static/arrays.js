// Technically A Array ( In JS ) is a Dynamic variable as it is a Object So you don't need to Declare it's size on runtime
// ################## Arrays ##################   
const numbers = [1,2,3,4,5,6,7,8];
const cars = ["Toyota","Fiat","Ford","BMW","Audi","Mercedes"];

// Accessing Elements
    console.log(numbers[1]);
    console.log(numbers[3]);

// Updating Elements
    numbers[2]= 5;
    cars[5]= "GMW";

    console.log(numbers);
    console.log(cars);

// Inserting Elements
    // --> [][][][]
    cars.unshift("Cheri");
    console.log(cars)

    // [][][][] <--
    numbers.push(20);
    console.log(numbers);

    // [][]->[]<-[][]
    cars.splice(2,"Mazda");

// Deleting Elements
    // [][][][][]<--
    numbers.pop();
    console.log(numbers);

    // ->[][][][][]
    numbers.shift(0);
    console.log(numbers);
