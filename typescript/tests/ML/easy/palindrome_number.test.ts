import { isPalindrome2 } from "../../../src/ML/easy/palindrome_number";

test("isPalindrome example test1", () => {
  expect(isPalindrome2(121)).toEqual(true);
});

test("isPalindrome example test2", () => {
  expect(isPalindrome2(-121)).toEqual(false);
});
test("isPalindrome example test3", () => {
  expect(isPalindrome2(10)).toEqual(false);
});
