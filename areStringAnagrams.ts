//Time complexity: O(n)
//Space complexity: O(n) where n is the number of characters available in string 1
function isStringAnagram(str1:string,str2:string){
    if(str1.length!==str2.length){
        return false;
    }
   let freq:{[key:string]:number}={}
   for(let i=0;i<str1.length;i++){
            const current=str1[i];
           freq[current]=(freq[current]||0)+1;
    }
   for(let j=0;j<str2.length;j++){
     
        const current=str2[j];
        if(!freq[current])
            return false;
        freq[current]--;
    }
    return true;

}

// Small optimization can be done by taking the freq array as length of 26 as we are dealing with
// only 26 characters
