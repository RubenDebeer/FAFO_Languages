# Create a function that take sin a list of integers and Returns a Boolean
def containsDuplicate(nums):  
    known = set() 
    for number in nums:   
        if number in known:
            return True
        known.add(number)
    return False
# Big O --> O(n)