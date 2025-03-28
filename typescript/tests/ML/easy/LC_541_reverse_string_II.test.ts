import { reverseStr } from "../../../src/ML/easy/LC_541_reverse_string_II";

test("reverseStr example test1", () => {
  expect(reverseStr("abcdefg", 2)).toEqual("bacdfeg");
});

test("reverseStr example test2", () => {
  expect(reverseStr("abcd", 2)).toEqual("bacd");
});
