import { ListNode } from "../../../utils/linked_list";

//TC:O(n),SC:O(n) as each Node is added to Set
export function hasCycle(head: ListNode | null): boolean {
  let hashSet = new Set<ListNode>();
  while (head) {
    if (hashSet.has(head)) return true;
    hashSet.add(head);
    head = head.next;
  }
  return false;
}

//TC:O(n) as by the time slow reaches end fast also reaches a cycle so O(n), SC:O(1)
function hasCycle1(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next != null && slow != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
