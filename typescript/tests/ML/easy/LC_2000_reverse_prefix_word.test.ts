import { reversePrefix1 } from "../../../src/ML/easy/LC_2000_reverse_prefix_word";

test("reverse prefix of word example test1", () => {
  expect(reversePrefix1("abcdefd", "d")).toEqual("dcbaefd");
});

test("reverse prefix of word example test2", () => {
  expect(reversePrefix1("xyxzxe", "z")).toEqual("zxyxxe");
});

test("reverse prefix of word example test3", () => {
  expect(reversePrefix1("abcd", "z")).toEqual("abcd");
});
