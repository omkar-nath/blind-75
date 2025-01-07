interface TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
}

export default function binarySearchTreeValidate(root:TreeNode|null):boolean{
    function inValidRange(root:TreeNode|null,maxAllowed:number,minAllowed:number){
        if(root==null)
            return true;
        if(root.val<=minAllowed || root.val>=maxAllowed){
            return false;
        }

        const isLeftSubTreeValid=inValidRange(root.left,root.val,minAllowed);
        const isRightSubTreeValid=inValidRange(root.right,maxAllowed,root.val);
        return isLeftSubTreeValid && isRightSubTreeValid;
    }
    return inValidRange(root,Infinity,-Infinity);

}

