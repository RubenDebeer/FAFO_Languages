const numbers = [7,2,9,6,4];
//const numbers = [5,6,1,3];

for( let i = 0 ; i < numbers.length; i++){
    
    for( let j = 0 ; j < numbers.length; j++){

        if(numbers[j] < numbers[j-1]){
            let swap_value = numbers[j];
            numbers[j] = numbers[j-1];
            numbers[j-1] = swap_value;
        }
    }
}

console.log(numbers);

// [7,2,9,6,4]
// Pass 1 (i = 0)
// Inner Loop : 
//             j = 1  2 < 7 -> [2, 7, 9, 6, 4]
//             j = 2  9 < 7 -> [2, 7, 9, 6, 4]
//             j = 3  6 < 9 -> [2, 7, 6, 9, 4]
//             j = 4  4 < 9 -> [2, 7, 6, 4, 9]

// [2, 7, 6, 4, 9]
// Pass 2 (i = 1)
// Inner Loop:
//             j = 1  7 < 2 -> [2, 7, 6, 4, 9]
//             j = 2  6 < 7 -> [2, 6, 7, 4, 9]
//             j = 3  4 < 7 -> [2, 6, 4, 7, 9]
//             j = 4  9 < 7 -> [2, 6, 4, 7, 9]

// [2, 6, 4, 7, 9]
// Pass 3 ( i = 2)
// Inner Loop: 
//             j = 1  6 < 2 -> [2, 6, 4, 7, 9]
//             j = 2  4 < 6 -> [2, 4, 6, 7, 9] 
//             j = 3  7 < 6 -> [2, 4, 6, 7, 9] 
//             j = 4  9 < 7 -> [2, 4, 6, 7, 9] 

// Pass 4 
// [2, 4, 6, 7, 9]

// Outer Loop 
// [7,2,9,6,4];

// Inner Loop
// [7;2, 9;2 ,6;9 , 6;4];