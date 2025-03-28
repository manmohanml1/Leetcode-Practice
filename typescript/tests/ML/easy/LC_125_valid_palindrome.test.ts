import { isPalindrome2 } from "../../../src/ML/easy/LC_125_valid_palindrome";

test("isPalindrome example test1", () => {
  expect(isPalindrome2("A man, a plan, a canal: Panama")).toEqual(true);
});

test("isPalindrome example test2", () => {
  expect(isPalindrome2("race a car")).toEqual(false);
});
test("isPalindrome example test3", () => {
  expect(isPalindrome2(" ")).toEqual(true);
});
test("isPalindrome example test4", () => {
  expect(isPalindrome2("0P")).toEqual(false);
});
