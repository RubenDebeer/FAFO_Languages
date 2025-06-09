// Search in Rotated Sorted 

numbers = [3, 4, 5, 6, 1, 2];
target = 1
// [3,4,5,6,1,2]
//  L   M   T  R
// 

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid; // If Found Gooi it back 

        // Check if the left half is sorted 
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Otherwise the right half must be sorted.
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}