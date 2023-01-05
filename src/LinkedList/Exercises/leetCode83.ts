/** Problem Statement:
 * Given the head of a sorted linked list, delete all duplicates 
 * such that each element appears only once. Return the linked 
 * list sorted as well.
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let currentNode: ListNode | null = head;
    let nextNode: ListNode | null = head;
    while (currentNode !== null) {
        nextNode = nextNode!.next;
        if (nextNode === null) {
            currentNode.next = null;
            return head;
        }
        if (nextNode && nextNode.val === currentNode.val) {
            continue;
        }
        if (nextNode && nextNode.val !== currentNode.val) {
            currentNode.next = nextNode;
            currentNode = nextNode;
            continue;
        }
    }

    return head;
};

function arrayToLinkedList(values: Array<number>): ListNode | null {
    if (values.length === 0) return null;
    let list = values;
    let head = new ListNode(list.shift()!);
    let currentNode = head;
    while (list.length > 0) {
        let nextNode = new ListNode(list.shift());
        currentNode.next = nextNode;
        currentNode = nextNode;
    }

    return head;
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
};

let node1 = arrayToLinkedList([0, 0, 1, 1, 2, 2]);
printList(node1);
let res = deleteDuplicates(node1);
printList(res);

export {};