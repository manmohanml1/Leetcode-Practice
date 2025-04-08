//TC:O(n),SC:O(n)
export function majorityElement(nums: number[]): number {
  let checkMap = new Map<number, number>();
  let ans = 0;
  for (let num of nums) {
    const count = checkMap.get(num) || 0;
    checkMap.set(num, count + 1);
    if (checkMap.get(num)! > nums.length / 2) ans = num;
  }
  return ans;
}

function majorityElement1(nums: number[]): number {
  let check = -1;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      check = num;
    }
    count += num === check ? 1 : -1;
  }
  return check;
}
