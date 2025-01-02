interface TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
}

// Time complexity: O(n)
// Space complexity: O(h) where h is the height of the tree 

function bstMaxDepth(root:TreeNode | null) : number {
    if(!root)
        return 0;
    const left=bstMaxDepth(root.left);
    const right=bstMaxDepth(root.right);

    return 1+Math.max(left,right);
}

//Time complexity: O(n)
//Space complexity: O(h) where h is the height of the tree

function bstMaxDepthUsingStack(root:TreeNode | null):number{
    if(root==null){
        return 0;
    }

    let stack:[TreeNode| null,number][]=[];
    stack.push([root,1]);
    let maxDepth=0;
    while(stack.length!=0){
        let [node,current_dep]=stack.pop() as [TreeNode,number];
        if(node!=null){
            maxDepth=Math.max(maxDepth,current_dep);

            stack.push([node.left,current_dep+1]);
            stack.push([node.right,current_dep+1]);

        }
    }
    return maxDepth;

}
