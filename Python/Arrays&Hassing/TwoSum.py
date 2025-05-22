# Number should be equal to input number
#  0  1  2  3
# [3][4][5][6]

# 0 -> 3
# 1 -> 4
# 2 -> 5
# 3 -> 6

# 3 + 4 = 7 
# 0 +1  = 7

# Brute Fore 
def twoSum(nums, target):
    for index in range(len(nums)):
        for j in range(index+1, len(nums)):
            if nums[index] + nums[j] == target:
                return [index,j]
            else:
                return []


nums = [3,4,5,6]
target = 7

twoSum(nums,target)
