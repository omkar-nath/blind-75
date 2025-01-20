interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function rearrangeLinkedList(head: ListNode | null): void {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list

  let prev: ListNode | null = null;
  let current: ListNode | null = slow;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  // Now combine one node from first and one node from second
  let first: ListNode | null = head;
  let second: ListNode | null = prev;
  while (second && second.next) {
    let temp1 = first!.next;
    first!.next = second;
    first = temp1;

    let temp2 = second!.next;
    second!.next = first;
    second = temp2;
  }
}

function printList(list: ListNode | null): void {
  let current = list;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  },
};

rearrangeLinkedList(list);

printList(list);
