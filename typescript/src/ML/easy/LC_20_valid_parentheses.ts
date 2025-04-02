//TC:O(n) since it may go through the whole string, SC: O(n) since it may go through the whole stack
function isValid(s: string): boolean {
  let list = new Map<string, string>();
  list.set("}", "{");
  list.set("]", "[");
  list.set(")", "(");
  let ans = [];
  for (let c of s) {
    if (list.has(c)) {
      if (ans && ans[ans.length - 1] === list.get(c)) {
        ans.pop();
      } else {
        return false;
      }
    } else {
      ans.push(c);
    }
  }
  return ans.length === 0; //also -> !ans.length ? true : false
}

//Better solution than above
export function isValid1(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = { "}": "{", "]": "[", ")": "(" }; //or instead od record -> ""} as const; tells Typescript to treat it safely
  for (let c of s) {
    if (c === "{" || c === "[" || c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0 || stack.pop() != map[c]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
