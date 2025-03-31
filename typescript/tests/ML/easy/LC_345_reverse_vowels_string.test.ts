import { reverseVowels2 } from "../../../src/ML/easy/LC_345_reverse_vowels_string";

test("reverseVowels example test1", () => {
  expect(reverseVowels2("IceCreAm")).toEqual("AceCreIm");
});

test("reverseVowels example test2", () => {
  expect(reverseVowels2("leetcode")).toEqual("leotcede");
});
