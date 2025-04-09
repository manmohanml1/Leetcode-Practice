//TC:O(n^2),SC:O(n)
function minimumOperations(nums: number[]): number {
  let sortedNums = nums.sort((a, b) => a - b);
  let count = 0;
  let j = 0;
  if (sortedNums[j] === 0) {
    j++;
  }
  while (j < sortedNums.length) {
    let i = 0;
    while (i < nums.length) {
      if (nums[i] > 0) {
        nums[i] = nums[i] - sortedNums[j];
      }
      i++;
    }
    j++;
    count++;
  }
  return count;
}

//TC:O(n),SC:O(n)
export function minimumOperations1(nums: number[]): number {
  let list = new Set();
  for (let num of nums) {
    if (num !== 0) list.add(num);
  }
  return list.size;
}

function minimumOperations2(nums: number[]): number {
  let list = new Set(nums);
  list.delete(0);
  return list.size;
}
