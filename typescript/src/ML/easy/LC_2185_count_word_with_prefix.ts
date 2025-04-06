//TC:O(n),SC:O(1)
export function prefixCount(words: string[], pref: string): number {
  let ans = 0;
  for (let word of words) {
    if (word.startsWith(pref)) ans++;
  }
  return ans;
}

function prefixCount1(words: string[], pref: string): number {
  return words.filter((word) => word.startsWith(pref)).length;
}
