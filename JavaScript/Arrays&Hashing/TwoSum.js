 function twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]; 
                }
            }
        }
        return [];
};

let nums = [4,5,6];
let target = 10

console.log(twoSum(nums,target))