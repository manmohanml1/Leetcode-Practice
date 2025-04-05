import { hasCycle } from "../../../src/ML/easy/LC_141_linked_list_cycle";
import { createCyclicLinkedList, ListNode } from "../../../utils/linked_list";

describe("linked list cycle", () => {
  it("should have return true for list with cycle", () => {
    const head = createCyclicLinkedList([3, 2, 0, -4], 1);
    expect(hasCycle(head)).toEqual(true);
  });
  it("should have return true when cycle starts at head", () => {
    const head = createCyclicLinkedList([1, 2], 0);
    expect(hasCycle(head)).toEqual(true);
  });
  it("should return false for list with no cycle", () => {
    const head = createCyclicLinkedList([1], -1);
    expect(hasCycle(head)).toEqual(false);
  });
  it("should return true for single node with cycle", () => {
    const node = new ListNode(1);
    node.next = node;
    expect(hasCycle(node)).toBe(true);
  });
  it("should return false for single node with no cycle", () => {
    const node = new ListNode(1);
    expect(hasCycle(node)).toBe(false);
  });
  it("should return false for empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });
});
