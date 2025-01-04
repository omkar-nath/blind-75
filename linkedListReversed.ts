interface ListNode{
    val:number;
    next:ListNode | null;
}

export default function reverseLinkedList(head:ListNode| null):ListNode | null{
    let current=head;
    let prev:ListNode | null=null;
    while(current!==null){
        const next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev;
    
}



// Test cases

const list1:ListNode ={
    val:1,
    next: {
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:null
            }
        }
    }
}

console.log(reverseLinkedList(list1))
