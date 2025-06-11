// If the number in an array appears more than once. 
// Input: nums = [1, 2, 3, 3]
// Input: nums = [1, 2, 3, 4]

const hasDuplicated = (numbers) => {
    let unique_numbers = new Set()

    for (number of numbers) {
        if (unique_numbers.has(number)) {
            return true
        } else {
            unique_numbers.add(number);
        }
    }
    return false;
}
 
console.log(hasDuplicated(nums));


// Feasible Function  = el[i] == el[i+1]
const checkWithBS = (elements,target) => {

    let left =  0; 
    let right = elements.length -1;
    let dup_index = -1; 

    while(left<right){
        let mid = left.Math.floor((right-left)/2);

        if(elements[mid] === target ){
            dup_index = mid;
            right = mid - 1;
        }else if(elements[mid] > target ){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return dup_index;
}