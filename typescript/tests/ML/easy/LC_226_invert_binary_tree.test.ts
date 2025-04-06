import { invertTree } from "../../../src/ML/easy/LC_226_invert_binary_tree";
import { buildTree, treeToArray } from "../../../utils/tree_node";

describe("invertTree", () => {
  it("should invert a basic binary tree", () => {
    const input = buildTree([4, 2, 7, 1, 3, 6, 9]);
    const expected = [4, 7, 2, 9, 6, 3, 1];
    const inverted = invertTree(input);
    expect(treeToArray(inverted)).toEqual(expected);
  });

  it("should handle single node tree", () => {
    const input = buildTree([1]);
    const expected = [1];
    const inverted = invertTree(input);
    expect(treeToArray(inverted)).toEqual(expected);
  });

  it("should handle empty tree", () => {
    const input = buildTree([]);
    const inverted = invertTree(input);
    expect(inverted).toBeNull();
  });

  it("should invert left-heavy tree", () => {
    const input = buildTree([1, 2, null, 3]);
    const expected = [1, null, 2, null, 3]; // now becomes right-heavy
    const inverted = invertTree(input);
    expect(treeToArray(inverted)).toEqual(expected);
  });

  it("should invert right-heavy tree", () => {
    const input = buildTree([1, null, 2, null, 3]);
    const expected = [1, 2, null, 3]; // now becomes left-heavy
    const inverted = invertTree(input);
    expect(treeToArray(inverted)).toEqual(expected);
  });
});
