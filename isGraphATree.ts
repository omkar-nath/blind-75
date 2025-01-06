// Intution is to think in terms of DFS. 
// In DFS how we can keep track of parent. We can just have one extra variable which will hold the value of parent node.
// We do not want to traverse the node if it is leading back to the parent.
// Now check if the node which is currently in execution has been already visited or not. 
//  If yes, then simply return false, as a tree cannot have cycle 
//  If no, then traverse the neighbours 
//
//  Time complexity: O(n+v) DFS takes n+v where n is the number of nodes and v is the number of edges

function adjacencyList(edges:number[][],num:number):number[][]{
    let adj: number[][] = Array.from({ length: num }, () => []);   
    for(let i=0;i<edges.length;i++){
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    return adj;
}
function dfs(parent:number,node:number,adj:number[][],seen:Set<number>){
    if (seen.has(node)) return false;
    seen.add(node);
    for (const neighbor of adj[node]) {
        if (parent !== neighbor) {
            const result = dfs(node, neighbor, adj, seen);
            if (!result) return false;
        }
    }
    return true;
}


function graphIsTree(
    num:number,
    edges:Array<[number,number]>
):boolean{
    if(edges.length!==num-1)
        return false;
    const adj=adjacencyList(edges,num);
    const seen=new Set<number>();

    return dfs(-1,0,adj,seen);

}

let num=5;
let edges:Array<[number,number]>=[[3,4],[0,3],[1,2],[0,1]];
console.log(graphIsTree(num,edges))
