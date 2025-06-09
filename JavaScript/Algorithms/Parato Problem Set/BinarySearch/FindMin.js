// Find Minimum in Rotated Sorted Array
numbers = [3,4,5,6,1,2]

const find_min = (elements) => {

    let left = 0; 
    let right = elements.length
    let lowest_index = -1;

    while(left<=right){
        let mid = left + Math.floor((right-left)/2);

        if(elements[mid] <= elements[elements.length - 1]){
            lowest_index = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return elements[lowest_index]; 
}