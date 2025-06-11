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


// If You have space to play use a set 

const calcTowSum = (elements, target) => {
    let seen = new Set();

    for(let i = 0; i< elements.length; i++){
        // 2 + 6 = 8 
        // 8 - 6 = 2 
        let complement = target - elements[i];

        if(seen.has(complement)){
            return([seen.get(complement),i]);
        }

        seen.set(elements[i]);
    }
    return null;
}

console.log(calcTowSum(numbers,10));