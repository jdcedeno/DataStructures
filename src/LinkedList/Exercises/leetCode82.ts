/** Problem Statement:
 * Given the head of a sorted linked list, delete all nodes 
 * that have duplicate numbers, leaving only distinct numbers 
 * from the original list. Return the linked list sorted as well.
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
    if (head.next === null) return head;

    let nodeArray = new Array<ListNode>();
    let l = head;
    let r: ListNode | null = head;
    let count = 1;
    while (r !== null) {
        r = r.next;
        
        if (r === null && count === 1) {
            nodeArray.push(l);
            continue;
        }
        if (r && l.val !== r.val && count === 1) {
            nodeArray.push(l);
            l = r;
            continue;
        }
        if (r && l.val !== r.val && count > 1) {
            l = r;
            count = 1;
            continue;
        }
        if (r && l.val === r.val) {
            count++;
            continue;
        }
    }

    return linkNodeArray(nodeArray);
};

function linkNodeArray(nodeArray: Array<ListNode>): ListNode | null {
    if (nodeArray.length === 0) return null;
    if (nodeArray.length === 1) {
        nodeArray[0].next = null;
        return nodeArray[0];
    }

    let result = nodeArray[0];
    let size = nodeArray.length;
    for (let i = 0; i < size; i++) {
        let currentNode = nodeArray[i];
        if (i === size - 2) {
            nodeArray[i + 1].next = null;
            currentNode.next = nodeArray[i + 1];
            break;
        } else {
            currentNode.next = nodeArray[i + 1];
        }
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
};

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
};

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

let node1 = makeList(3);
// node1!.next!.val = 0;
node1!.next!.next!.val = 1;
// node1!.next!.next!.next!.next!.val = 3;
// node1!.next!.next!.next!.next!.next!.val = 3;
printList(node1);

let res = deleteDuplicates(node1);
printList(res);

export {};