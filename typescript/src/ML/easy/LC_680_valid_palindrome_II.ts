//TC:O(n),SC:O(1)
export function validPalindrome(s: string): boolean {
  function isPalindrome(str: string, left: number, right: number): boolean {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
}

function isPalindrome(str: string, left: number, right: number): boolean {
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

function validPalindrome1(s: string): boolean {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
}
