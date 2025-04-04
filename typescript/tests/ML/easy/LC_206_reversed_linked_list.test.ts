import {
  reverseList,
  reverseList1,
} from "../../../src/ML/easy/LC_206_reversed_linked_list";
import { arrayToList, listToArray } from "../../../utils/linked_list";

describe("reverseList", () => {
  it("should reverse a list with multiple nodes", () => {
    const headIter = arrayToList([1, 2, 3, 4, 5]);
    const headRecrsv = arrayToList([1, 2, 3, 4, 5]);
    const reversedIter = reverseList(headIter);
    const reversedRecrsv = reverseList1(headRecrsv);
    expect(listToArray(reversedIter)).toEqual([5, 4, 3, 2, 1]);
    expect(listToArray(reversedRecrsv)).toEqual([5, 4, 3, 2, 1]);
  });
  it("should handle a list with one node", () => {
    const headIter = arrayToList([99]);
    const headRecrsv = arrayToList([99]);
    const reversedIter = reverseList(headIter);
    const reversedRecrsv = reverseList1(headRecrsv);
    expect(listToArray(reversedIter)).toEqual([99]);
    expect(listToArray(reversedRecrsv)).toEqual([99]);
  });
  it("should return null for an empty list", () => {
    const headIter = arrayToList([]);
    const headRecrsv = arrayToList([]);
    const reversedIter = reverseList(headIter);
    const reversedRecrsv = reverseList1(headRecrsv);
    expect(listToArray(reversedIter)).toEqual([]);
    expect(listToArray(reversedRecrsv)).toEqual([]);
  });
  it("should reverse a list with two nodes", () => {
    const headIter = arrayToList([1, 2]);
    const headRecrsv = arrayToList([1, 2]);
    const reversedIter = reverseList(headIter);
    const reversedRecrsv = reverseList1(headRecrsv);
    expect(listToArray(reversedIter)).toEqual([2, 1]);
    expect(listToArray(reversedRecrsv)).toEqual([2, 1]);
  });
});
