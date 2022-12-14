/** Problem Statement:
 * Given a linked list, swap every two adjacent nodes and return 
 * its head. You must solve the problem without modifying the 
 * values in the list's nodes (i.e., only nodes themselves may be 
 * changed.)
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

/**
 * CASE 1: SIZE OF LINKED LIST IS EVEN
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 * p    c    n
 * COUNT = 2
 * p = 1, p.next = 2
 * c = 2, c.next = 3
 * n = 3
 * 
 * pseudo-algorithm: (COUNT % 2 === 0)
 * c.next = p
 * p.next = n
 * c = n
 * count++
 *                ||
 *                \/
 * 2 -> 1 -> 3 -> 4 -> 5 -> 6 -> null
 *      p    c
 * COUNT = 3
 * p = 1, p.next = 3
 * c = 3, c.next = 4
 * 
 * pseudo-algorithm: (COUNT % 2 !== 0)
 * p.next = c.next
 * p = c
 * c = c.next
 * count++
 *                ||
 *                \/
 *        ------>
 * 2 -> 1    3 -> 4 -> 5 -> 6 -> null
 *           p    c    n
 * COUNT = 4
 * p = 3, p.next = 4
 * c = 4, c.next = 5
 * n = 5
 * 
 * pseudo-algorithm: (COUNT % 2 === 0)
 * c.next = p
 * p.next = n
 * c = n
 * count++
 *                ||
 *                \/
 * 2 -> 1 -> 4 -> 3 -> 5 -> 6 -> null
 *                p    c
 * COUNT = 5
 * p = 3, p.next = 5
 * c = 5, c.next = 6
 * 
 * pseudo-algorithm: (COUNT % 2 !== 0)
 * p.next = c.next
 * p = c
 * c = c.next
 * count++
 *                ||
 *                \/
 *                  ------>
 * 2 -> 1 -> 4 -> 3    5 -> 6 -> null
 *                     p    c     n
 * COUNT = 6
 * p = 5, p.next = 6
 * c = 6, c.next = null
 * n = null
 * 
 * pseudo-algorithm: (COUNT % 2 === 0)
 * c.next = p
 * p.next = n
 * c = n
 * count++
 *                ||
 *                \/
 * 2 -> 1 -> 4 -> 3 -> 6 -> 5 -> null
 *                          p     c
 * COUNT = 7
 * p = 5, p.next = null
 * c = null, c.next = error
 * 
 * pseudo-algorithm: (COUNT % 2 !== 0)
 * WHILE LOOP ENDS BECAUSE c = null
 * 
 * 
 * 
 * CASE 2: SIZE OF LINKED LIST IS ODD
 * 2 -> 1 -> 4 -> 3 -> 6 -> 5 -> 7 -> null
 *                          p    c
 * COUNT = 7
 * p = 5, p.next = 7
 * c = 7, c.next = null
 * 
 * pseudo-algorithm: (COUNT % 2 !== 0)
 * if (c.next === null) return
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;

    let resultHead = head;
    let previousNode = head;
    let currentNode = head.next;
    let count = 2;
    while (currentNode !== null) {
        if (count % 2 !== 0) {
            if (currentNode.next === null) return resultHead;
            previousNode.next = currentNode.next;
            previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
            continue;
        };

        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode.next = nextNode;

        if (count === 2) {
            resultHead = currentNode;
        }

        if (nextNode === null) return resultHead;
        
        currentNode = nextNode;
        count++;
    }

    return resultHead.next;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
// let node6 = new ListNode(6);

// node5.next = node6;
node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;

let result = swapPairs(node1);
let res: ListNode | null = result;
while (res !== null) {
    console.log(res.val);
    res = res.next;
}

export {};