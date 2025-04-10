import { getCommon3 } from "../../../src/ML/easy/LC_2540_min_common_value";

test("minimum common value example test1", () => {
  expect(getCommon3([1, 2, 3], [2, 4])).toEqual(2);
});

test("minimum common value example test2", () => {
  expect(getCommon3([1, 2, 3, 6], [2, 3, 4, 5])).toEqual(2);
});
