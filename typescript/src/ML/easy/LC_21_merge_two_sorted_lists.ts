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

//Iterative Method: TC:O(n + m) SC: O(1)
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}

//Recursive Method TC: O(n + m), SC: O(n + m)
function mergeTwoLists1(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
  let merged: ListNode;
  if (list1.val < list2.val) {
    merged = new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  } else {
    merged = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
  }
  return merged;
}
