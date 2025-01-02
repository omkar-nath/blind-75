function isBalancedBrackets(str:string):boolean{
    let stack:string[]=[];
    if(!str)
        return true;
     
    function isOpening(bracket:string){
        return bracket==='[' || bracket==='(' || bracket ==='{';
    }

    for(let i=0;i<str.length;i++){
        if(isOpening(str[i])){
            stack.push(str[i]);

        }
        else {
            switch(str[i]){
                case ']':
                if(stack[stack.length-1]!='[')
                        return false;
                else stack.pop();
                break;
                case '}':
                if(stack[stack.length-1]!='{')
                        return false;
                stack.pop();
                break;
                case ')':
                if(stack[stack.length-1]!='(')
                        return false;
                stack.pop();
                break;
            }
        }
    }

    return stack.length===0;
}

// Test cases

const input1="[]";

console.log(isBalancedBrackets(input1));

const input2="([)]";

console.log(isBalancedBrackets(input2));

const input3="([]){}";

console.log(isBalancedBrackets(input3));
