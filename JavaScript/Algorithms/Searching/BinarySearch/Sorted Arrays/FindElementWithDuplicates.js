// https://algo.monster/problems/binary_search_duplicates
// [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
//  L           M                  R
// Find the first occurrence

const findFirst = (elements, target) => {

    let left = 0;
    let right = elements.length -1;
    let first_index = -1;

    while(left <= right){
        let mid = left + Math.floor((right-left)/2);

        if(elements[mid] === target){
            first_index = mid;
            right = mid - 1;
        }else if(elements[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return first_index;
}
