import { strStr } from "../../../src/ML/easy/index_first_occurrence";

test("index_first_occurrence example test1", () => {
  expect(strStr("sadbutsad", "sad")).toEqual(0);
});

test("index_first_occurrence example test2", () => {
  expect(strStr("leetcode", "leeto")).toEqual(-1);
});
