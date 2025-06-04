const twoSum  = (numbers, target) => {

    for( let i =  0; i < numbers.length; i++){
        for(let j = i + 1 ; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            if(sum === target){
                return [i,j]
            }
        }
    }
}
numbers = [5, 5]
console.log(twoSum(numbers, 10));