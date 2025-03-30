/**
Do not return anything, modify s in-place instead.
*/
function reverseString(s: string[]): void {
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    let tmp = s[low];
    s[low] = s[high];
    s[high] = tmp;
    low++;
    high--;
  }
}

function reverseString1(s: string[]): void {
  s.reverse();
}

export function reverseString2(s: string[]): void {
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    [s[low], s[high]] = [s[high], s[low]];
    low++;
    high--;
  }
}
