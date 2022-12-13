/** PROBLEM STATEMENT:
 * 21. You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by 
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * 
 * 25 minutes to solve and test
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

type listVal = ListNode | null;

function mergeTwoSortedLists(list1: listVal, list2: listVal): listVal {
    if (!list1 && !list2) return null;

    let result = new ListNode();
    let currentVal = result;
    let left = list1;
    let right = list2;

    while (left || right) {
        if (!left && right) {
            currentVal.next = new ListNode(right.val);
            currentVal = currentVal.next;
            right = right.next;
        } else if (left && !right) {
            currentVal.next = new ListNode(left.val);
            currentVal = currentVal.next;
            left = left.next;
        } else {
            if (right!.val < left!.val) {
                currentVal.next = new ListNode(right!.val);
                currentVal = currentVal.next;
                right = right!.next;
            } else if (left!.val < right!.val) {
                currentVal.next = new ListNode(left!.val);
                currentVal = currentVal.next;
                left = left!.next;
            } else {
                currentVal.next = new ListNode(right!.val);
                currentVal = currentVal.next;
                currentVal.next = new ListNode(left!.val);
                currentVal = currentVal.next;
                right = right!.next;
                left = left!.next;
            }
        }
    }

    return result.next;
}

let l11 = new ListNode(0);
let l12 = new ListNode(1);
let l13 = new ListNode(1);
l12.next = l13;
l11.next = l12;

let l21 = new ListNode(1);
let l22 = new ListNode(2);
let l23 = new ListNode(3);
l22.next = l23;
l21.next = l22;

let result = mergeTwoSortedLists(l11, l21);
let currentNode = result;
while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}

export {};