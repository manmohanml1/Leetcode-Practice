function isPalindrome(s: string): boolean {
  let m = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let low = 0;
  let high = m.length - 1;
  while (low < high) {
    if (m[low] != m[high]) {
      return false;
    }
    low += 1;
    high -= 1;
  }
  return true;
}

function isPalindrome1(s: string): boolean {
  const isAlphaNumeric = (c: string) => {
    const code = c.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
  };
  let m = s.toLowerCase();
  let low = 0;
  let high = m.length - 1;
  while (low < high) {
    while (low < high && !isAlphaNumeric(m[low])) {
      low++;
    }
    while (low < high && !isAlphaNumeric(m[high])) {
      high--;
    }
    if (m[low] != m[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}

//Refined to makew lower space complexity from above
export function isPalindrome2(s: string): boolean {
  const isAlphaNumeric = (c: string) => {
    const code = c.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) ||
      (code >= 97 && code <= 122) ||
      (code >= 65 && code <= 90)
    );
  };
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    while (low < high && !isAlphaNumeric(s[low])) {
      low++;
    }
    while (low < high && !isAlphaNumeric(s[high])) {
      high--;
    }
    if (s[low].toLowerCase() != s[high].toLowerCase()) {
      return false;
    }
    low++;
    high--;
  }
  return true;
}
