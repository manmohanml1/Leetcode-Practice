export function reverseStr(s: string, k: number): string {
  let res: string = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k > s.length) {
      res += s.substring(i).split("").reverse().join("");
      break;
    }
    const temp1: string = s
      .substring(i, i + k)
      .split("")
      .reverse()
      .join("");
    let temp2: string;
    if (i + 2 * k > s.length) temp2 = s.substring(i + k);
    else temp2 = s.substring(i + k, i + 2 * k);
    res += temp1 + temp2;
  }
  return res;
}
