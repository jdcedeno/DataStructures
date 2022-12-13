/** PROBLEM STATEMENT:
 * 19. Remove Nth Node From End of List
 * Given the head of a linked list, remove the nth node from the end of the 
 * list and return its head.
 * 
 * 52 minutes to come up with an untested solution
 * 1h 25 minutes total after testing and fixing edge case when n = size of the list
 */

/**
 * 1 -> 2 -> 3 -> 4 -> 5
 * h    ^    ^         ^
 *      p1   r         p2
 * 
 * remove n = 3
 * 
 * separation between two pointers p1 and p2 is (n)
 * p1 points to the node previous to the target
 * p2 points to the end of the list
 * need to make p1.next point to p1.next.next
 * if (p1.next.next === null), p1.next needs to point to null
 * because n = 1 and we have to remove the end of the list
 * 
 * another question is how to determine when n = size of the list?
 * this means we need to remove the first element, the head. But 
 * we don't have the size of the list
 * 
 * result: 1 -> 2 -> 4 -> 5
 *  
 * 
 * 1 -> 2 -> 3 -> 4 -> 5
 * h              ^    ^
 *                p1   p2
 * 
 * remove n = 1
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
    if (head.next === null) return null;

    let result = head;
    let p1 = head;
    let p2 = head;
    for (let i = 0; i < n; i++) {
        if (p2.next === null) {
            p1 = p1.next!;
            return p1;
        } else {
            p2 = p2.next;
        }
    }

    while (p2 !== null) {
        if (p2.next === null) {
            if (n === 1) {
                p1.next = null;
            } else {
                p1.next = p1.next!.next;
            }
            break;
        } else {
            p1 = p1.next!;
            p2 = p2.next;
        }
    }

    return result;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;

let result = removeNthFromEnd(node1, 5);
let res: ListNode | null = result;
while (res !== null) {
    console.log(res.val);
    res = res.next;
}

export {};