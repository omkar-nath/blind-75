interface TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;
}


// Time complexity: O(n)
// Space complexity: O(h)  where h is the height of the tree
function  binaryTreeEqual(a:TreeNode| null, b:TreeNode| null)
{
  if(a==null && b==null){
        return true;
    }
    if(!a || !b){
        return false;
    }

    return a.val === b.val && binaryTreeEqual(a.left,b.left) && binaryTreeEqual(a.right,b.right);
}


// Time complexity: O(n)
// Space complexity: O(h) where h is the height of the tree

function binaryTreeEqualQueue(a:TreeNode|null, b:TreeNode| null){
    function check(a:TreeNode|null,b:TreeNode|null):boolean{
        if(a==null && b==null)
            return true;
        if(a===null || b===null)
        {
            return false;
        }

        if(a.val!==b.val){
            return false;
        }
        return true;
    }
   const queue:[TreeNode|null,TreeNode | null][]=[[a,b]];
   while(queue.length){
        [a,b]=queue.shift() as [TreeNode | null , TreeNode | null];
        if(!check(a,b)){
            return false;
        }

        if(a){
            queue.push([a.left,b?.left] as [TreeNode | null, TreeNode | null]);
            queue.push([a.right,b?.right] as [TreeNode | null , TreeNode | null]);

        }
    }
    return true;
}
