import {
  ListNode,
  reverseList,
  reverseList1,
} from "../../../src/ML/easy/LC_206_reversed_linked_list";

function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe("reverseList", () => {
  it("should reverse a list with multiple nodes", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    const reversed1 = reverseList1(head);
    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    expect(listToArray(reversed1)).toEqual([5, 4, 3, 2, 1]);
  });
  it("should handle a list with one node", () => {
    const head = arrayToList([99]);
    const reversed = reverseList(head);
    const reversed1 = reverseList1(head);
    expect(listToArray(reversed)).toEqual([99]);
    expect(listToArray(reversed1)).toEqual([99]);
  });
  it("should return null for an empty list", () => {
    const head = arrayToList([]);
    const reversed = reverseList(head);
    const reversed1 = reverseList1(head);
    expect(listToArray(reversed)).toEqual([]);
    expect(listToArray(reversed1)).toEqual([]);
  });
  it("should reverse a list with two nodes", () => {
    const head = arrayToList([1, 2]);
    const reversed = reverseList(head);
    const reversed1 = reverseList1(head);
    expect(listToArray(reversed)).toEqual([2, 1]);
    expect(listToArray(reversed1)).toEqual([2, 1]);
  });
});
