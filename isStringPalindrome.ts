export default function isStringPalindrome(str:string):boolean{
   const isPalindrome=(str:string)=>{
        let low=0;
        let high=str.length-1;
        while(low<=high){
            if(str[low]!==str[high])
                return false;
            low++;
            high--;
        }
        return true;
    }

  const isAlphanumeric = (char:string) => (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
   const trimmedInput=str.trim().split("").filter(isAlphanumeric).join("").toLowerCase();
    return isPalindrome(trimmedInput);

   

  
    

}


console.log(isStringPalindrome("No  'x' in Nixon"))
