/** Problem Statement:
 * Given the head of a linked list, reverse the nodes of the list k 
 * at a time, and return the modified list.
 * 
 * k is a positive integer and is less than or equal to the length 
 * of the linked list. If the number of nodes is not a multiple of 
 * k then left-out nodes, in the end, should remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes 
 * themselves may be changed.
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || k === 0) return null;

    let listOfHeads = splitList(head, k)!;
    let reversedHeads = new Array<ListNode>();
    for (let count = 0; count < listOfHeads.length; count++) {
        if (countList(listOfHeads[count]) < k) {
            reversedHeads[count] = listOfHeads[count];
            break;
        }
        reversedHeads[count] = reverseList(listOfHeads[count])!;
    }
    let mergedLists = mergeList(reversedHeads);

    return mergedLists;
};

function splitList(head: ListNode | null, k: number): Array<ListNode> | null {
    if (head === null || k <= 0) return null;
    
    let result = new Array<ListNode>();
    let currentNode: ListNode | null = head;
    while (currentNode !== null) {
        for (let count = 0; count < k; count++) {
            if (currentNode === null) break;
            if (count === 0) {
                result.push(currentNode);
            }
            if (count === k-1) {
                let nextNode: ListNode | null = currentNode.next;
                currentNode.next = null;
                currentNode = nextNode;
                continue;
            }
            currentNode = currentNode.next;
        }
    }

    return result;
}

function mergeList(headList: Array<ListNode> | null): ListNode | null {
    if (headList === null) return null;

    let result = headList[0];
    if (headList.length < 2) return result;
    
    let previousList = headList[0];
    let currentList = headList[1];
    for (let count = 1; count < headList.length; count++) {
        previousList = headList[count - 1];
        currentList = headList[count];
        while (true) {
            if (previousList.next === null) {
                previousList.next = currentList;
                break;
            }
            previousList = previousList.next;
        }
    }

    return result;
}

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let stack = new Array<ListNode>();
    let currentHead: ListNode | null = head;
    while (currentHead !== null) {
        stack.push(currentHead);
        currentHead = currentHead.next;
    }
    let result = stack[stack.length - 1];
    while (stack.length !== 0) {
        let currentNode = stack.pop()!;
        if (stack.length === 0) {
            currentNode.next = null;
            return result;
        } 
        currentNode.next = stack[stack.length - 1];
    }

    return result;
}

function countList(head: ListNode): number {
    let count = 0;
    let currentNode: ListNode | null = head;
    while (currentNode !== null) {
        count++;
        currentNode = currentNode.next;
    }
    return count;
}



let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);

node5.next = node6;
node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;


let result = reverseKGroup(node1, 3);
let res: ListNode | null = result;
while (res !== null) {
    console.log(res.val);
    res = res.next;
}

export {};