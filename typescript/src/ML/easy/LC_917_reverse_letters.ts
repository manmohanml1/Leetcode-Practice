export function reverseOnlyLetters(s: string): string {
  const englishLetters = (str: string) => {
    const code = str.charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
  };
  let low = 0;
  let arr = s.split("");
  let high = arr.length - 1;
  while (low < high) {
    while (low < high && !englishLetters(arr[low])) {
      low++;
    }
    while (low < high && !englishLetters(arr[high])) {
      high--;
    }
    if (englishLetters(arr[low]) && englishLetters(arr[high])) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }
    low++;
    high--;
  }
  return arr.join("");
}
