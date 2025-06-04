// https://algo.monster/problems/binary_search_first_element_not_smaller_than_target
// [1][2][3][4][5][6][7][8][9][10][11][12][13][14][15]
//  L           T           M                       R
const findFirstNotSmaller = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    let boundary_index = - 1;

    while(left <= right){

        let mid = left + Math.floor((right-left)/2);

        // Direction of Search --> 
        if(numbers[mid] >= target){
            boundary_index = mid;
            right = mid - 1;// Discard right
        }else{
            left = mid + 1; // Discard Left
        }
    }
    return boundary_index;
}

const numbers = [1, 3, 3, 5, 8, 10];
const target = 4;
console.log(findFirstNotSmaller(numbers,target));