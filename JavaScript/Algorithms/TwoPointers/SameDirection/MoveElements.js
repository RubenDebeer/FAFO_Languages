/*
    We use one pointer to track the current position to place a non-zero element, 
    while the other scans through the array. This allows us to preserve the 
    relative order of non-zero elements and move all the 0s to the end in-place 
    using O(1) extra space and O(n) time complexity.
*/


// HOW: 
/* 

*/