import { ListNode } from "../../../utils/linked_list";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Two Pointer approach -> TC:O(n) as goes through the whole list, SC:O(1) as only pointers no saving
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

//Recursive approach TC:O(n), SC:O(n) as we are recursively calling n times so n stacks and max depth of recursion is n
export function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let reversedHead: ListNode | null = head;
  if (head.next) {
    reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
  }
  return reversedHead;
}
