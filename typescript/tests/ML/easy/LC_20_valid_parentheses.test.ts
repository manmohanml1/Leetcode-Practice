import { isValid1 } from "../../../src/ML/easy/LC_20_valid_parentheses";

test("valid paranthese example test1", () => {
  expect(isValid1("()")).toEqual(true);
});

test("valid paranthese example test2", () => {
  expect(isValid1("()[]{}")).toEqual(true);
});

test("valid paranthese example test3", () => {
  expect(isValid1("(]")).toEqual(false);
});

test("valid paranthese example test4", () => {
  expect(isValid1("([])")).toEqual(true);
});
