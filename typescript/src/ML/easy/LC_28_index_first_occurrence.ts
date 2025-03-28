export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

function strStr2(haystack: string, needle: string): number {
  if (needle === "") return 0;
  let i = 0;
  let j = 0;
  while (i <= haystack.length - needle.length) {
    j = 0;
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i;
    }
    i++;
  }
  return -1;
}

function strStr3(haystack: string, needle: string): number {
  const arr = haystack.split(needle);
  if (arr.length > 1) {
    return arr[0].length;
  }
  return -1;
}
