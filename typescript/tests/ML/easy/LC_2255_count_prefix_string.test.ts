import { countPrefixes } from "../../../src/ML/easy/LC_2255_count_prefix_string";

test("count prefixes of string example test1", () => {
  expect(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc")).toEqual(3);
});

test("count prefixes of string example test2", () => {
  expect(countPrefixes(["a", "a"], "aa")).toEqual(2);
});
