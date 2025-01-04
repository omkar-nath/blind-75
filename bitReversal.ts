function bitReversal(n:number):number{
    let reversed=0;
    for(let i=0;i<32;i++){
        const lsb=n&1;
        //Append LSB of original number to the MSB of reversed after shifting one position
        reversed=reversed << 1 | lsb;

        // Right shift the original number to process the next bit
        n>>=1;
    }
    return reversed>>>0;
}



// Test cases
const in1=8;
console.log(bitReversal(in1));
