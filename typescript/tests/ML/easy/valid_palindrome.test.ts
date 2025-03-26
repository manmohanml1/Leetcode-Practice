import { isPalindrome1 } from "../../../src/ML/easy/valid_palindrome";

test("isPalindrome example test1", () => {
  expect(isPalindrome1("A man, a plan, a canal: Panama")).toEqual(true);
});

test("isPalindrome example test2", () => {
  expect(isPalindrome1("race a car")).toEqual(false);
});
test("isPalindrome example test3", () => {
  expect(isPalindrome1(" ")).toEqual(true);
});
test("isPalindrome example test4", () => {
  expect(isPalindrome1("0P")).toEqual(false);
});
