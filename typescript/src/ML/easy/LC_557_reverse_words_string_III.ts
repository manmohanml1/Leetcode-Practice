export function reverseWords(s: string): string {
  let m: string[] = s.split(" ");
  let n = "";
  for (let i = 0; i < m.length; i++) {
    n += m[i].split("").reverse().join("");
    if (i < m.length - 1) n += " ";
  }
  return n;
}

function reverseWords1(s: string): string {
  return s
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}

function reverseWords2(s: string): string {
  const arrStr = s.split(" ");
  return arrStr
    .map((str: string) => {
      let left = 0;
      let right = str.length - 1;
      const arr = str.split("");
      while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
      return arr.join("");
    })
    .join(" ");
}
