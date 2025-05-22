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

// ################## Sets  ################## Like an array but only Unique values
const Employees = new Set(["Jaap","Drikus","Geraard"]);

//Insert elements
Employees.add("Ruben");

// Access Elements
console.log(Employees.has("Ruben"))

//Or 

for (employee of Employees){
    console.log(employee);
}

// Updating Elements
if(Employees.has("Drikus")){
    console.delete("Drikus");
    console.add("Drick");
}

// Deleting Elements
Employees.delete("Geraard");



// ################## Looping ##################
// For Loop 
for(let i = 0; i < cars.length(),i++;){
    console.log(cars[i]);
}

// For In Loop  --> Can be use for objects   --> for (key  in  object) (Best Suited for Objects)
for( number in numbers){
    console.log(number);
}

// For Of Loop --> Can be use for Iterable objects   --> for (key  of  object) ( best Suited for Arrays, Maps, Sets)
for (car of cars){
    console.log(car);
}

// While Loop
while(i < cars.length()){
    console.log(cars[i]);
    i++;
}

// ################## Conditions ##################
// If
if(car[0] == "Toyota"){
    console.log("The First value is = Toyota");
}

// If Else
if(number[0] == 2){
    console.log("First element in numbers is = 2")
}else{
    console.log("First element in numbers is not = 2")
}