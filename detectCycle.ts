interface ListNode{
    val:number;
    next:ListNode | null;
}
export default function  linkedListDetectCycle(head:ListNode| null):boolean{
    let slowPtr:ListNode|null=head;
    let fastPtr:ListNode|null=head;

    while(fastPtr && fastPtr.next){
        if(!slowPtr)
            return false;
        slowPtr=slowPtr.next;
        
        fastPtr=fastPtr.next.next;

        if(slowPtr===fastPtr){
            return true;
        }
    }
    return false;
}
