const numbers = [7, 2, 9, 6, 4];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[j - 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j - 1];
            numbers[j - 1] = temp;
        }
    }
}

console.log(numbers); // Output: [2, 4, 6, 7, 9]