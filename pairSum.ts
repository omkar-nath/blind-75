function pairSum(numbers:number[],target:number):number[]{
 const lookup:{[key:number]:number}={};

for(let i=0;i<numbers.length;i++){
        const complement=target-numbers[i];
        if(lookup.hasOwnProperty(complement) && lookup[complement]!==i){
            return [lookup[complement],i];
        }

        lookup[numbers[i]]=i;
    }
    return [];
 
}

// Test cases

let numbers = [5,3,9,5,1,6,3] 
let target = 7

console.log(pairSum(numbers,target));
