import { containsDuplicate3 } from "../../../src/ML/easy/LC_217_contains_duplicate";

test("containsDuplicate example test1", () => {
  expect(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});

test("containsDuplicate example test2", () => {
  expect(containsDuplicate3([1, 2, 3, 4])).toEqual(false);
});
test("containsDuplicate example test3", () => {
  expect(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});
