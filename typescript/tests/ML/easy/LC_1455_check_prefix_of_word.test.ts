import { isPrefixOfWord } from "../../../src/ML/easy/LC_1455_check_prefix_of_word";

test("check prefix of word example test1", () => {
  expect(isPrefixOfWord("i love eating burger", "burg")).toEqual(4);
});

test("check prefix of word example test2", () => {
  expect(isPrefixOfWord("this problem is an easy problem", "pro")).toEqual(2);
});

test("check prefix of word example test3", () => {
  expect(isPrefixOfWord("i am tired", "you")).toEqual(-1);
});

test("check prefix of word example test4", () => {
  expect(isPrefixOfWord("hellohello hellohellohello", "ell")).toEqual(-1);
});

test("check prefix of word example test5", () => {
  expect(isPrefixOfWord("bigbag", "bag")).toEqual(-1);
});
