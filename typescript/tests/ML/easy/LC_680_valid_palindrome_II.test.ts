import { validPalindrome } from "../../../src/ML/easy/LC_680_valid_palindrome_II";

test("valid Palindrome II example test1", () => {
  expect(validPalindrome("aba")).toEqual(true);
});

test("valid Palindrome II example test2", () => {
  expect(validPalindrome("abca")).toEqual(true);
});

test("valid Palindrome II example test3", () => {
  expect(validPalindrome("abc")).toEqual(false);
});
