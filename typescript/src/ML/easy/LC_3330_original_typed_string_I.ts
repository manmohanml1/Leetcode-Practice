//TC:O(n), SC:O(n)
//if it is string[] type then functions includes and push works
function possibleStringCount(word: string): number {
  let m = word.split("");
  let ans = 1;
  let check: string[] = [];
  for (let i = 0; i < word.length; i++) {
    if (check.includes(word[i]) && word[i] === word[i - 1]) {
      ans++;
    } else {
      check.push(word[i]);
    }
  }
  return ans;
}

//TC:O(n), SC:O(n)
//if it is Set() type then functions has and add works
function possibleStringCount1(word: string): number {
  let ans = 1;
  let check = new Set();
  for (let i = 0; i < word.length; i++) {
    if (check.has(word[i]) && word[i] === word[i - 1]) {
      ans++;
    } else {
      check.add(word[i]);
    }
  }
  return ans;
}

//TC: O(n), SC:O(1) no extra space needed
export function possibleStringCount2(word: string): number {
  let ans = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      ans++;
    }
  }
  return ans;
}
