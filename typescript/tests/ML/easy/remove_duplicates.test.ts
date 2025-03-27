import { removeDuplicates } from "../../../src/ML/easy/remove_duplicates";

test("removeDuplicates example test1", () => {
  expect(removeDuplicates([1, 1, 2])).toEqual(2);
});

test("removeDuplicates example test2", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});
