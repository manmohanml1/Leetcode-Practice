//TC:O(n), SC:O(n)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const newSet = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (newSet.has(nums[i]) && Math.abs(newSet.get(nums[i])! - i) <= k) {
      return true;
    }
    newSet.set(nums[i], i);
  }
  return false;
}

//Brute Force-> TC:O(n^2), SC:O(1) -> Issue is Time Limit exceeded
function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

//Two-pointer approach-> TC:O(n^2), SC:O(1)
function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  if (nums.length === 1) return false;
  let left = 0,
    right = 1;
  while (left < right && left <= nums.length) {
    if (right - left > k || right >= nums.length) {
      left++;
      right = left + 1;
      continue;
    }
    if (nums[left] === nums[right]) return true;
    right++;
  }
  return false;
}

//Omptimized to reduce SC from O(n) to O(1) and TC still remains O(n)
export function containsNearbyDuplicate3(nums: number[], k: number): boolean {
  let newSet = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (newSet.has(nums[i])) {
      return true;
    }
    newSet.add(nums[i]);
    if (newSet.size > k) {
      newSet.delete(nums[i - k]);
    }
  }
  return false;
}
