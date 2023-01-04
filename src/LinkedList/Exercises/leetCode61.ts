/** Problem Statement:
 * Given the head of a linked list, rotate the list to the right by k places.
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return null;

    let size = countList(head); //O(n)
    let count = findRemainder(size, k);
    if (count === 0) return head;
    
    let currentNode: ListNode | null = head;
    let result: ListNode;
    let endNode: ListNode;
    let linkNode: ListNode;
    let currentCount = 0;
    while (currentNode !== null) {
        if (currentCount === size - count - 1) endNode = currentNode;

        if (currentCount === size - count) result = currentNode;

        if (currentNode.next === null) {
            linkNode = currentNode;
        }
        currentNode = currentNode.next;
        count++;
    }
    
    endNode!.next = null;
    linkNode!.next = head;

    return result!;
};

function findRemainder(listSize: number, k: number): number {
    let result = k;
    if (listSize > k) return result;
    else {
        result = Math.round(listSize * ((k / listSize) - Math.floor(k / listSize)));
    }
    return result;
}

function countList(head: ListNode | null): number {
    if (head === null) return 0;
    let count = 0;
    let currentHead : ListNode | null = head;
    while (currentHead !== null) {
        count++;
        currentHead = currentHead.next;
    }

    return count;
}

function makeList(size: number): ListNode | null {
    if (size <= 0 || !Number.isInteger(size)) return null;

    let head = new ListNode(0);
    let currentNode = head;
    for (let i = 0; i < size; i++) {
        let nextNode = new ListNode(i);
        currentNode.next = nextNode;
        currentNode = nextNode;
    }

    return head.next;
}

function printList(head: ListNode | null): void {
    if (head === null) return;

    let list = new Array<string>();
    let currentNode: ListNode | null = head;
    while (currentNode !== null) {
        list.push(currentNode.val.toString());
        currentNode = currentNode.next;
    }

    let printThis = list.join(" -> ");
    console.log(printThis);
}

let myList = makeList(5);
printList(myList);
let result = rotateRight(myList, 24);
printList(result);

export {};