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