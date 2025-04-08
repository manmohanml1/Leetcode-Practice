//TC:O(n),SC:O(n)
export function mostFrequentEven(nums: number[]): number {
  if (nums.length === 0) return -1;
  let freq = new Map();
  let max = -1;
  let most = -1;
  for (let num of nums) {
    if (num % 2 !== 0) continue;
    let count = (freq.get(num) ?? 0) + 1;
    freq.set(num, count);
    if (max === count) {
      if (num < most) {
        most = num;
      }
    }
    if (count > max) {
      max = count;
      most = num;
    }
  }
  return most;
}
