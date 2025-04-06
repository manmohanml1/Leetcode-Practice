/**
   Definition for a binary tree node.
**/
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Helper to convert array to binary tree (level order)
export function buildTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0) return null;
  const root = new TreeNode(values[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  while (queue.length > 0 && i < values.length) {
    const current = queue.shift();
    if (current) {
      const leftVal = values[i++];
      if (leftVal != null && leftVal !== undefined) {
        current.left = new TreeNode(leftVal);
        queue.push(current.left);
      }
      if (i < values.length) {
        const rightVal = values[i++];
        if (rightVal !== null && rightVal !== undefined) {
          current.right = new TreeNode(rightVal);
          queue.push(current.right);
        }
      }
    }
  }
  return root;
}

// Helper to convert binary tree to array (level order)
export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}
