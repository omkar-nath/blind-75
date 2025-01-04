interface TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
}

function isEqual(root1:TreeNode | null, root2: TreeNode|null ):boolean{
    if(!root1 || !root2){
       return root1===null && root2===null; 
    }

    return root1.val===root2.val && isEqual(root1.left,root2.left) && isEqual(root1.right,root2.right);
}

export default function binaryTreeSubtree(root:TreeNode|null,subRoot:TreeNode | null):boolean{
  if(!root)
        return false;
    if(isEqual(root,subRoot)){
        return true;
    }
    return binaryTreeSubtree(root.left,subRoot) || binaryTreeSubtree(root.right,subRoot);
}
