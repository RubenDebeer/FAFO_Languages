// This problem is a major 🔑 in solving future binary search-related problems. As we will see in the following modules, many problems boil down to finding the boundary in a boolean array.


// When:
//  - Use this when you’re looking for a threshold or transition point.

// Common UseCases:
//	•	Find the first version with a bug (e.g., Leetcode’s “First Bad Version”)
//	•	Find the point where a condition starts to be true
//	•	Determine the earliest point something becomes valid/active

// How: 
// - Still works like vanilla BS but just does not short circuit the While loop.


//[false, false, false, true, true, true]
//   L             M                  R
const findBoundary = (values) => {

    let left = 0;
    let right = values.length - 1;
    let boundary_index = -1;

    while (left <= right) {

        let mid = Math.floor((right - left) / 2);
        // If the values at this index is true then we know we have a candidate, we just don't know if it is the earliest  candidate therefore we can reduce the search to the Right and the right.

        if (values[mid] === true) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // If no earliest boundary was found we return the default value.
    return boundary_index;
}


//[false, false, false, true, true, true]
// L       M                           R 
// Feasible Function


const elements_1 = [false, false, false, true, true, true];
const findFirstTrue = (elements) => {

    let left = 0; 
    let right = elements.length - 1; 
    let found_index = -1;

    while( left <= right){

        let mid = left + Math.floor((right-left)/2);

        if(elements[mid] === true){
            found_index = mid;
            right = mid -1
        }else{
            left = mid + 1;
        }
    }
    return found_index;
}

console.log(findFirstTrue(elements_1));