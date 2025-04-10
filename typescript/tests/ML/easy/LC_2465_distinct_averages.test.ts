import { distinctAverages } from "../../../src/ML/easy/LC_2465_distinct_averages";

test("isPalindrome example test1", () => {
  expect(distinctAverages([4, 1, 4, 0, 3, 5])).toEqual(2);
});

test("isPalindrome example test2", () => {
  expect(distinctAverages([1, 100])).toEqual(1);
});

test("isPalindrome example test3", () => {
  expect(distinctAverages([10, 2, 2, 0, 4, 0])).toEqual(2);
});
