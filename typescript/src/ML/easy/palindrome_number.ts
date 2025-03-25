function isPalindrome1(x: number): boolean {
  const stringNumber = String(x);
  let reverseString: String = "";
  for (let i = stringNumber.length; i > 0; i--) {
    reverseString += stringNumber[i - 1];
  }
  return stringNumber === reverseString;
}

export function isPalindrome2(x: number): boolean {
  const stringNumber = x.toString();
  for (let i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] != stringNumber[stringNumber.length - i - 1])
      return false;
  }
  return true;
}
