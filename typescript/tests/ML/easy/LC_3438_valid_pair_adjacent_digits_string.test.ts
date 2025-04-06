import { findValidPair1 } from "../../../src/ML/easy/LC_3438_valid_pair_adjacent_digits_string";

test("find Valid Pair of adjacent digits in string example test1", () => {
  expect(findValidPair1("2523533")).toEqual("23");
});

test("find Valid Pair of adjacent digits in string example test2", () => {
  expect(findValidPair1("221")).toEqual("21");
});
test("find Valid Pair of adjacent digits in string example test3", () => {
  expect(findValidPair1("22")).toEqual("");
});
