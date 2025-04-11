//Brute Force -> TC:O(n^2),SC:O(n)
function reversePrefix(word: string, ch: string): string {
  let i = 0;
  let m = 0;
  let list = word.split("");
  while (i < list.length) {
    if (list[i] === ch) {
      while (i >= m) {
        [list[i], list[m]] = [list[m], list[i]];
        i--;
        m++;
      }
      break;
    }
    i++;
  }
  return list.join("");
}

//TC:O(n),SC:O(n)
export function reversePrefix1(word: string, ch: string): string {
  let i = 0;
  let m = 0;
  let list = word.split("");
  while (i < list.length) {
    if (list[i] === ch) {
      break;
    }
    i++;
  }
  while (list.includes(ch) && i >= m) {
    [list[i], list[m]] = [list[m], list[i]];
    i--;
    m++;
  }
  return list.join("");
}

function reversePrefix2(word: string, ch: string): string {
  const index = word.indexOf(ch);
  return word
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("")
    .concat(word.slice(index + 1));
}
