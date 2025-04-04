import { mergeTwoLists } from "../../../src/ML/easy/LC_21_merge_two_sorted_lists";
import { arrayToList, listToArray } from "../../../utils/linked_list";

describe("merge Two Sorted Lists", () => {
  it("should merge Two Sorted Lists", () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    const resultList = mergeTwoLists(list1, list2);
    expect(listToArray(resultList)).toEqual([1, 1, 2, 3, 4, 4]);
  });
  it("should merge Two empty Lists", () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([]);
    const resultList = mergeTwoLists(list1, list2);
    expect(listToArray(resultList)).toEqual([]);
  });
  it("should merge One Sorted List with an empty list", () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([0]);
    const resultList = mergeTwoLists(list1, list2);
    expect(listToArray(resultList)).toEqual([0]);
  });
});
