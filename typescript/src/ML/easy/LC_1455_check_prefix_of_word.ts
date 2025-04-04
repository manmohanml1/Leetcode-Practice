//TC:O(n),SC:O(1)
export function isPrefixOfWord(sentence: string, searchWord: string): number {
  let list = sentence.split(" ");
  let start = 0;
  while (start < list.length) {
    if (list[start].startsWith(searchWord)) {
      return start + 1;
    }
    start++;
  }
  return -1;
}

// makes an array with split(' '), then use Array.prototype.findIndex() with String.prototype.startsWith() to find right word
//findIndex() returns -1 if failed else Index + 1 gives 0 || -1 which would take -1 as final answer
function isPrefixOfWord1(sentence: string, searchWord: string): number {
  return (
    sentence.split(" ").findIndex((e) => e.startsWith(searchWord)) + 1 || -1
  );
}
