function finalString(s: string): string {
  let arr = s.split("");
  let m = "";
  let start = 0;
  while (start < s.length) {
    if (arr[start] == "i") {
      m = m.split("").reverse().join("");
    } else {
      m += arr[start];
    }
    start++;
  }
  return m;
}

function finalString1(s: string): string {
  let forward = "";
  let reversed = "";
  const faultyChar = "i";
  for (let char of s) {
    if (char === faultyChar) {
      let temp = forward;
      forward = reversed;
      reversed = temp;
    } else {
      reversed = char + reversed;
      forward = forward + char;
    }
  }
  return forward;
}

export function finalString2(s: string): string {
  let ans: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "i") {
      ans.push(s[i]);
    } else {
      ans = ans.reverse();
    }
  }
  return ans.join("");
}

function finalString3(s: string): string {
  return s
    .split("")
    .reduce(
      (acc, char) =>
        char == "i" ? acc.split("").reverse().join("") : acc + char,
      ""
    );
}
