import { prefixCount } from "../../../src/ML/easy/LC_2185_count_word_with_prefix";

test("count words with given prefix example test1", () => {
  expect(prefixCount(["pay", "attention", "practice", "attend"], "at")).toEqual(
    2
  );
});

test("count words with given prefix example test2", () => {
  expect(prefixCount(["leetcode", "win", "loops", "success"], "code")).toEqual(
    0
  );
});
