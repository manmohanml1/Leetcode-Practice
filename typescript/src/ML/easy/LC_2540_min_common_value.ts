//Brute force-> TC:O(n^2), SC:O(1) -> Tme limit exceeded issue
function getCommon(nums1: number[], nums2: number[]): number {
  for (let num of nums1) {
    for (let num1 of nums2) {
      if (num === num1) return num;
    }
  }
  return -1;
}

//TC:O(n),SC:O(n)
function getCommon1(nums1: number[], nums2: number[]): number {
  let ans = -1;
  let checkSet = new Set(nums1);
  for (let i = 0; i < nums2.length; i++) {
    if (checkSet.has(nums2[i])) return nums2[i];
  }
  return ans;
}

//TC:O(n),SC:O(n)
function getCommon2(nums1: number[], nums2: number[]): number {
  let ans = -1;
  let checkSet = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!checkSet.has(nums1[i])) checkSet.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (checkSet.has(nums2[i])) return nums2[i];
  }
  return ans;
}

//TC:O(n),SC:O(1)
export function getCommon3(nums1: number[], nums2: number[]): number {
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] == nums2[j]) return nums1[i];
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return -1;
}
