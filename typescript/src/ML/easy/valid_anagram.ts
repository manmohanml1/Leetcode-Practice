export function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  const charCounts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charCounts[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    charCounts[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
  for (let count of charCounts) {
    if (count != 0) return false;
  }
  return true;
}
function isAnagram1(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  const charCounts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charCounts[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    charCounts[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
  return charCounts.every((char) => char === 0);
}
function isAnagram2(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
