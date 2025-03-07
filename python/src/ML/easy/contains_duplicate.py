from typing import List


def contains_duplicate1(nums: List[int]) -> bool:
    nums.sort()
    for i in range(1,len(nums)):
        if nums[i] ==nums[i-1]:
            return True
    return False

def contains_duplicate2(nums: List[int]) -> bool:
    nums_set = set()
    for n in nums:
        if n in nums_set:
            return True
        nums_set.add(n)
    return False