// When: 
// - Can I define a YES/NO function that turns from NO to YES (or YES to NO) as a number increases?
// - Use BS whenever you make a BInary decision to shrink the search range.
// - Use when yu want to short-circuit and return as soon as it finds the target.

// How: 
// - With BS you reduce the number of search terms on each iteration.

// Implementation: 

// [1][2][3][4][5][6][7][8][9][10][11][12][13][14][15]
//  F  F  F  F  F           F   T   T   T   T   T   T
//  L                       M                       R
const binary_search = (numbers,target) => {

    let left = 0;
    let right = numbers.length - 1;

    // <= because left and right could point to the same element, < would miss it
    while (left <= right) {
        // use `(right - left) / 2` to prevent `left + right` potential overflow
        let middle = left + Math.floor((right - left) / 2);

        // Return index if found
        if(numbers[middle] === target) return middle;

        if(numbers[middle] > target){
            right = middle - 1; // Discard the Right hand side of the array 
        }else{
            left = middle + 1 // Discard the Left hand Side of the Array 
        }
    }
    return -1;
}


// lett mid = left+Math.Floor((r-l)/2)