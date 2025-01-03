interface TreeNode {
    val:number;
    left:TreeNode|null;
    right:TreeNode|null;
}


// Time complexity: O(n) 
// Space complexity: O(h) where h is the height of the tree
// In this solution we are creating a new tree which have the flipped nodes
function binaryTreeFlip(root:TreeNode|null): TreeNode|null{
    if(!root)
        return null;
    const newNode:TreeNode ={
        val:root.val,
        left:binaryTreeFlip(root.right),
        right:binaryTreeFlip(root.left)
    }

    return newNode;
}

// Time complexity: O(n)
// Space complexity: O(h)

function binaryTreeFlipUsingSameTree(root:TreeNode | null) : TreeNode | null {
    if(!root){
        return null;
    }
  const leftNode=binaryTreeFlipUsingSameTree(root.left);
    const rightNode=binaryTreeFlipUsingSameTree(root.right);
    root.left=rightNode;
    root.right=leftNode;
    return root;
}
// Time complexity: O(n)
// Space complexity: O(n) . Queue can have maximum upto n nodes
function binaryTreeFlipUsingLevelOrder(root:TreeNode | null): TreeNode | null {
    let queue:(TreeNode|null)[]=[root];
    while(queue.length){
        const node=queue.shift();
        if(node){
            const temp=node.left;
            node.left=node.right;
            node.right=temp;

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }

    }
    return root;
}
