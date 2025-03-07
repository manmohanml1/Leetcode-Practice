//Brute force - TC: O(n^2), SC : O(n^2)
function containsDuplicate1(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}
//More optimized - sorting: TC: O(nlogn), SC : O(nlogn)
function containsDuplicate2(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

//Optimized - has_set: TC: O(n), SC : O(n)
export function containsDuplicate3(nums: number[]): boolean {
  const set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

//Optimized 2 liner- has_set: TC: O(n), SC : O(n)
function containsDuplicate4(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size < nums.length;
}
//Optimized 1 liner- has_set: TC: O(n), SC : O(n)
function containsDuplicate5(nums: number[]): boolean {
  return new Set(nums).size < nums.length;
}
