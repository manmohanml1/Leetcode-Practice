//TC:O(n),SC:O(n)
function findValidPair(s: string): string {
  let checkMap = new Map<number, number>();
  let arr: number[] = s.split("").map(Number);
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    const count = checkMap.get(arr[i]) || 0;
    checkMap.set(arr[i], count + 1);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i] !== arr[i + 1] &&
      arr[i] === checkMap.get(arr[i]) &&
      arr[i + 1] === checkMap.get(arr[i + 1])
    ) {
      ans += arr[i].toString() + arr[i + 1].toString();
      return ans;
    }
  }
  return ans;
}

//TC:O(n),SC:O(1) We use 10 slots (we could also use 9 slots since we only consider digits from 1-9)
export function findValidPair1(s: string): string {
  const freq: number[] = new Array(10).fill(0);

  for (let i = 0; i < s.length; i++) {
    const n = parseInt(s[i]);
    freq[n]++;
  }
  let pair = "";
  for (let i = 0; i < s.length; i++) {
    const x = parseInt(s[i]);
    const y = parseInt(s[i + 1]);
    if (x === y) continue;
    if (freq[x] === x && freq[y] === y) {
      pair = x + "" + (y + "");
      break;
    }
  }
  return pair;
}
