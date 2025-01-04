// Time complexity: O(2^n)
// Space complexity: O(n)
function climbStairs(n:number):number {

    if(n<0)
        return 0;
    if(n===0)
        return 1;


    let leftSubTreeAns=climbStairs(n-1);
    let rightSubTreeAns=climbStairs(n-2);

    return leftSubTreeAns+rightSubTreeAns;
}

// Recursion with memoization
// Time complexity: O(n)
// Space complexity: O(n)
function climbStairsDp(n:number):number{
    let cache=new Array(n+1).fill(-1);
    function climb(n:number){
        if(n<0)
            return 0;
        if(n==0 || n==1)
            return 1;
        if(cache[n]>0)
            return cache[n];
        cache[n]=climb(n-1)+climb(n-2);
        return cache[n];
    }

    return climb(n);


}

// Testing
const in1=2;
const in2=3;
const in3=1;
const in4=44;

console.log("Input:",in1, "Output",(climbStairs(in1)));
console.log("Input:",in2, "Output",climbStairs(in2));
console.log(climbStairsDp(in1));
console.log(climbStairsDp(in2));
console.log(climbStairsDp(in4));
