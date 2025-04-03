import { possibleStringCount2 } from "../../../src/ML/easy/LC_3330_original_typed_string_I";

test("original typed string I example test1", () => {
  expect(possibleStringCount2("abbcccc")).toEqual(5);
});

test("original typed string I example test2", () => {
  expect(possibleStringCount2("abcd")).toEqual(1);
});

test("original typed string I example test3", () => {
  expect(possibleStringCount2("aaaa")).toEqual(5);
});

test("original typed string I example test4", () => {
  expect(possibleStringCount2("ere")).toEqual(1);
});
