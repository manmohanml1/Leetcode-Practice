function reverseVowels(s: string): string {
  let low = 0;
  let high = s.length - 1;
  let m = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
  const arr = s.split("");
  while (low < high) {
    while (!m.includes(s.charCodeAt(low)) && low < high) {
      low++;
    }
    while (!m.includes(s.charCodeAt(high)) && low < high) {
      high--;
    }
    if (m.includes(s.charCodeAt(high)) && m.includes(s.charCodeAt(low))) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }
    low++;
    high--;
  }
  return arr.join("");
}

function reverseVowels1(s: string): string {
  let low = 0;
  let high = s.length - 1;
  let m = "aeiouAEIOU";
  const arr = s.split("");
  while (low < high) {
    while (!m.includes(arr[low]) && low < high) {
      low++;
    }
    while (!m.includes(arr[high]) && low < high) {
      high--;
    }
    if (m.includes(arr[high]) && m.includes(arr[low])) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }
    low++;
    high--;
  }
  return arr.join("");
}

export function reverseVowels2(s: string): string {
  let low = 0;
  let high = s.length - 1;
  let m = "aeiouAEIOU";
  const arr = s.split("");
  while (low < high) {
    if (!m.includes(arr[low]) && low < high) {
      low++;
    }
    if (!m.includes(arr[high]) && low < high) {
      high--;
    }
    if (m.includes(arr[high]) && m.includes(arr[low])) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
      low++;
      high--;
    }
  }
  return arr.join("");
}
