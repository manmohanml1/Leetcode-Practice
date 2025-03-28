import twoSum from "../../../src/ML/easy/two-sum";

test("twoSum example test1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("twoSum example test2", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
test("twoSum example test3", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
