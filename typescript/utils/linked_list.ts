/**
 * Definition for singly-linked list.
 * */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

export function createCyclicLinkedList(
  values: number[],
  pos: number
): ListNode | null {
  if (values.length === 0) return null;
  const nodes: ListNode[] = values.map((val) => new ListNode(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    {
      nodes[i].next = nodes[i + 1];
    }
  }
  if (pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos]; //Creates cycle
  }
  return nodes[0];
}
