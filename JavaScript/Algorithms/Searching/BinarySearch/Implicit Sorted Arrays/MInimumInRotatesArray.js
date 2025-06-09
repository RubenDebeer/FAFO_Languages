// When: 
/* 
    At first glance, it seems that there's no way to do it in less than linear time because the array is not sorted.
    But remember binary search:
    can work beyond sorted arrays, as long as there is a binary decision we can use to shrink the search range.
*/

// How: 
/*
    Notice the numbers are divided into two sections: 
        - numbers larger than the last element of the array 
        - numbers smaller than it. The minimum element is at the boundary between the two sections.
    We can apply a feasible function of <= the last element and get the boolean array that characterizes the two sections.
    Now the problem is yet again reduced to finding the first true element in a boolean array. 
    And we already know how to do this from Find the First True in a Sorted Boolean Array module.
*/

// Implementation:
// [30, 40, 50, 10, 20]
//  F    F   F   T   F  
//  L       M        R

let findMin = (elements) => {
    let left = 0;
    let right = elements.length - 1;
    let index = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (elements[mid] <= elements[elements.length - 1]) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return index;
}
