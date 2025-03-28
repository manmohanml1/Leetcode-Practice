export function distinctAverages(nums: number[]): number {
  let avg = new Set();
  nums = nums.sort((a, b) => a - b);
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    avg.add((nums[low] + nums[high]) / 2);
    low += 1;
    high -= 1;
  }
  return avg.size;
}
