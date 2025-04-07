import { majorityElement } from "../../../src/ML/easy/LC_169_majority_element";

test("majorityElement example test1", () => {
  expect(majorityElement([3, 2, 3])).toEqual("3");
});

test("majorityElement example test2", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual("2");
});
