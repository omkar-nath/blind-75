// Time complexity: O(n) 
// Space complexity: O(n)
function findMissingNumnberInSequenceUsingSet(numbers:number[]): number {
    let seen = new Set();
    for(let i=0;i<=numbers.length;i++){
        if(!seen.has(i))
            return i;
    }
    return -1;
}

// Time complexity: O(n)
// Space complexity:  O(1)

function findMissingNumberInSequenceOptimized(numbers:number[]):number{
    let expectedSum=Array.from({length:numbers.length+1},(_,index)=>index).reduce((accum,current)=>accum+current,0);
    let actualSum=numbers.reduce((accum,current)=> accum+current,0);
    return expectedSum-actualSum;
}

// Test cases
const input1=[1,3,0];

console.log("Input:", input1, "Output:", findMissingNumberInSequenceOptimized(input1));

const input2=[3,0,4,2,1];

console.log("Input:", input2,"Output:", findMissingNumberInSequenceOptimized(input2));
