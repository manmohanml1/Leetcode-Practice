import { isAnagram } from "../../../src/ML/easy/valid_anagram";

test("containsDuplicate example test1", () => {
  expect(isAnagram("anagram", "nagaram")).toEqual(true);
});

test("containsDuplicate example test2", () => {
  expect(isAnagram("rat", "car")).toEqual(false);
});
test("containsDuplicate example test3", () => {
  expect(isAnagram("bro", "rob")).toEqual(true);
});
