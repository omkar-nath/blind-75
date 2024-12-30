function findDuplicates(numbers:number[]):boolean{
    let seen=new Set();
    for(let i=0;i<numbers.length;i++){
        if(seen.has(numbers[i])){
            return true;
        }
        seen.add(numbers[i]);
    }
    return false;
}


// Test cases:

let input1 =[5,7,1,3];
console.log(findDuplicates(input1));

let input2=[10,7,0,0,9];
console.log(findDuplicates(input2));

let input3=[3,2,6,5,0,3,10,3,10,5];
console.log(findDuplicates(input3));
