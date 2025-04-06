import { TreeNode } from "../../../utils/tree_node";

//Depth first search via recursion, TC:O(n),SC:O(n)
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

//Breadth First Search , TC:O(n),SC:O(n)
function invertTree1(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;
  let searchQueue: (TreeNode | null)[] = [root];
  while (searchQueue.length > 0) {
    let check = searchQueue.shift()!;
    [check.left, check.right] = [check.right, check.left];
    if (check.left != null) searchQueue.push(check.left);
    if (check.right != null) searchQueue.push(check.right);
  }
  return root;
}

//Iterative DFS , TC:O(n),SC:O(n)
function invertTree2(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop()!;
    [node.left, node.right] = [node.right, node.left];
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return root;
}

function invertTree3(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
