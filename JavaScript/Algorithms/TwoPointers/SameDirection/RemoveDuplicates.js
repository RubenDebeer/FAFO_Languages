// When: 
/* 
    This technique is particularly useful for in-place modification problems, 
    where we must avoid using additional memory and directly manipulate the original array.
*/

// How:
/*
    The same direction two pointers strategy is atechnique that uses two pointers moving in the same direction—usually a slow pointer and a fast pointer. 
    The fast pointer scans through the array to detect changes or key elements, 
    while the slow pointer keeps track of where the next unique item should be placed.
*/


// Implementation:
//Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.

//Input: [0, 0, 1, 1, 1, 2, 2].

//Output: 3.

//  [0, 0, 1, 1, 1, 2, 2].

const remove_duplicates = (elements) => {

    let slow = 0;

    for (let fast = 1; fast < elements.length; fast++) {
        if (elements[fast] !== elements[slow]) {
            slow++;
            elements[slow] = elements[fast];
        }
    }
    return slow + 1;
}