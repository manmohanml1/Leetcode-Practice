import { containsNearbyDuplicate3 } from "../../../src/ML/easy/LC_219_contains_duplicate_II";

test("contains Duplicate II example test1", () => {
  expect(containsNearbyDuplicate3([1, 2, 3, 1], 3)).toEqual(true);
});

test("contains Duplicate II example test2", () => {
  expect(containsNearbyDuplicate3([1, 0, 1, 1], 1)).toEqual(true);
});
test("contains Duplicate II example test3", () => {
  expect(containsNearbyDuplicate3([1, 2, 3, 1, 2, 3], 2)).toEqual(false);
});
