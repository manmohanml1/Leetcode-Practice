//TC:O(n),SC:O(1)
export function countPrefixes(words: string[], s: string): number {
  let ans = 0;
  for (let word of words) {
    if (s.startsWith(word)) ans++;
  }
  return ans;
}

function countPrefixes1(words: string[], s: string): number {
  return words.filter((word) => s.startsWith(word)).length;
}
