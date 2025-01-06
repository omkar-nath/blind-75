 interface TreeNode{
    val:number;
    left:TreeNode|null;
    right:TreeNode|null;
}
// Using queue
 // Time complexity: T(n)
 // Space complexity: T(m) m is the maximum number of nodes which can be at any level
export default function binaryTreeLevelOrderTraversal(root:TreeNode| null):number[][]{
    let result:number[][]=[];
    if(!root)
        return [];
    let queue:(TreeNode)[]=[root];
    while(queue.length){
        let level:number[]=[];
         let size=queue.length;
        for(let i=0;i<size;i++)
    {
            const node:TreeNode|undefined=queue.shift();
            if(node){
                 console.log("Here", node.val)
                level.push(node.val);
            }

            if(node?.left){
                queue.push(node?.left);

            }
            if(node?.right){
                queue.push(node?.right);
            }
        }
        result.push(level);
    }
    return result;
}

// Test cases
 // Time complexity: T(n)
 // Space complexity: T(h) where h is the height of the tree since we are going in recursive manner
 
 export  function binaryTreeLevelOrderRecursion(root:TreeNode| null):number[][]{
     let result:number[][]=[];
     function recur(result:number[][],level=0,node:TreeNode){
         if(result.length===level){
             result.push([]);
         }
         result[level].push(node.val);
         if(node.left){
             recur(result,level+1,node.left);
         }
         if(node.right){
             recur(result,level+1,node.right)
         }
     }
     if(root!=null){
         recur(result,0,root);
     }
     return result;
 }
const root1={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        }
        ,
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:{
            val:6,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}

console.log(binaryTreeLevelOrderRecursion(root1));
