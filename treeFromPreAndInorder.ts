interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function binaryTreeRebuildingFromTraversals(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  let preorderIndex = 0;

  let indexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  function construct(left: number, right: number): TreeNode | null {
    if (left > right) return null;
    const rootValue = preorder[preorderIndex++];
    const root: TreeNode = { val: rootValue, left: null, right: null };
    root.left = construct(left, indexMap.get(rootValue)! - 1);
    root.right = construct(indexMap.get(rootValue) + 1, right);
    return root;
  }

  return construct(0, preorder.length - 1);
}
