interface ListNode {
    val: number;
    next: ListNode | null;
}

export default function deleteNthNodeFromEnd(
    head: ListNode | null,
    n: number,
): ListNode | null {
    const dummy: ListNode = { val: 0, next: head };
    let first: ListNode | null = dummy;

    let second: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) first = first!.next;

    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    if (second !== null && second.next !== null) {
        second.next = second.next.next;
    }
    return dummy.next;
}
