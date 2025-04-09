import { minimumOperations1 } from "../../../src/ML/easy/LC_2357_min_operations_zero_array";

test("minimum Operations to make array zero example test1", () => {
  expect(minimumOperations1([1, 5, 0, 3, 5])).toEqual(3);
});

test("minimum Operations to make array zero example test2", () => {
  expect(minimumOperations1([0])).toEqual(0);
});
