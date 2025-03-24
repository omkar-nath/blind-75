interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
export default function BSTLowestCommmonAncestor(
  root: TreeNode | null,
  a: TreeNode | null,
  b: TreeNode | null,
): TreeNode | null {
  if (root === null || root === a || root === b) {
    return root;
  }

  const left = BSTLowestCommmonAncestor(root.left, a, b);
  const right = BSTLowestCommmonAncestor(root.right, a, b);

  if (left != null && right != null) {
    return root;
  }

  return left ? left : right;
}

// Using property of BST

function BSTLCA(
  root: TreeNode | null,
  a: TreeNode | null,
  b: TreeNode | null,
): TreeNode | null {
  if (!root) return root;
  if (a!.val < root.val && b!.val < root.val) {
    return BSTLCA(root.left, a, b);
  }
  if (a!.val > root.val && b!.val > root.val) {
    return BSTLCA(root.right, a, b);
  }
  return root;
}
