import { isPrefixString } from "../../../src/ML/easy/LC_1961_check_string_prefix_of_array";

test("check string is prefix of an array example test1", () => {
  expect(
    isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
  ).toEqual(true);
});

test("check string is prefix of an array example test2", () => {
  expect(
    isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])
  ).toEqual(false);
});

test("check string is prefix of an array example test3", () => {
  expect(isPrefixString("aaa", ["aa", "aaa", "fjaklfj"])).toEqual(false);
});
