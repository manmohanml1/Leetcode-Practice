// TC:O(n),SC:O(1)
export function isPrefixString(s: string, words: string[]): boolean {
  let checkString = "";
  for (let i = 0; i < words.length && checkString.length < s.length; i++) {
    checkString += words[i];
  }
  return s === checkString;
}

function isPrefixString1(s: string, words: string[]): boolean {
  let checkString = "";
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    count += words[i].length;
    if (count < s.length) {
      checkString += words[i];
      continue;
    } else if (count === s.length) {
      checkString += words[i];
      if (checkString === s) return true;
    }
  }
  return false;
}

//Each loop we reduce s until it doesn't find prefix or returns true
function isPrefixString2(s: string, words: string[]): boolean {
  for (let word of words) {
    if (s.startsWith(word)) {
      s = s.substring(word.length);
      if (s.length == 0) return true;
    } else {
      return false;
    }
  }
  return false;
}

//TC:O(n^2),SC:O(1)
function isPrefixString3(s: string, words: string[]): boolean {
  let i = 0,
    j = 0;
  while (i < s.length && j < words.length) {
    const word = words[j];
    for (let char of word) {
      if (char !== s[i]) return false;
      i++;
    }
    j++;
  }
  return i === s.length;
}
