export default function arrayProductExcludingCurrent(numbers
    :number[]):number[]{
    let leftProduct:number[]=[1];
    for(let  i=1;i<numbers.length;i++){
        leftProduct[i]=leftProduct[i-1]*numbers[i-1];
    }
    
    let rightProduct:number[]=new Array(numbers.length).fill(1);
    
    for(let i=numbers.length-2;i>=0;i--){
        rightProduct[i]=rightProduct[i+1]*numbers[i+1]
    }

    let result:number[]=[];
    for(let i=0;i<numbers.length;i++){
        result[i]=leftProduct[i]*rightProduct[i];
    }
 
    return result;
}

// Using single array 

function arrayProductExceptItself(numbers:number[]):number[]{
    let result:number[]=[1];
    for(let i=1;i<numbers.length;i++){
        result[i]=result[i-1]*numbers[i-1];
    }
    let rightProduct=1;
    for(let j=numbers.length-1;j>=0;j--){
        result[j]*=rightProduct;
        rightProduct*=numbers[j];

    }


}

// Test cases

const input1=[1,2,3];
console.log(arrayProductExcludingCurrent(input1));
