interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function kthSmallestElementInBst(
  root: TreeNode,
  k: number,
): number {
  let count = 0;
  let result = 0;
  function findKthSmallest(root: TreeNode | null, k: number): void {
    if (!root) return;

    findKthSmallest(root.left, k);
    count++;
    if (count === k) {
      result = root.val;
      return;
    }
    findKthSmallest(root.right, k);
  }
  findKthSmallest(root, k);
  return result;
}

// Using iteration

function kthSmallestInBst(root: TreeNode, k: number): number {
  let stack: TreeNode[] = [];
  let r: TreeNode = root;

  while (true) {
    while (root !== null) {
      stack.push(root); // Push the current node onto the stack
      root = root.left!; // Move to the left child
    }

    r = stack.pop()!;
    if (--k === 0) {
      return r.val!;
    }

    r = r.right!;
  }
}
