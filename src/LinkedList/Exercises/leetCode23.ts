/** PROBLEM STATEMENT:
 * 23. You are given an array of k linked-lists lists, each linked-list 
 * is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * PLAN:
 * 35 minutes best i could come up with is to keep improvising do on-the-go
 * - create an infinite while loop that's controlled by a flag i must change
 * when i'm done creating the result
 * - loop through the K lists and find the smallest value among their current
 * position
 * - add that value to the result.next node, and move that list's current pos
 * to the next node. Keep the others where they were
 * - repeat until all nodes have been visited (all point to null)
 * 
 * 
 * - 55 minutes and I cant think of a way to handle the flags condition to exit
 * the while loop
 * 
 * - maybe define an array of flags that specify which of the lists have reached
 * the end like: f =[false, false, true, false],
 * The size of the f list is equal to k (the size of lists array)
 * 
 * - My solution's time complexity will be O(k * j), where j is the length of the
 * longest linked list in the lists array
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

function mergeKSortedLists(lists: Array<ListNode | null>): ListNode | null {
    let resultHead = new ListNode(Number.MAX_SAFE_INTEGER);
    let resultCurrNode = resultHead;
    let resultMinValNode = resultHead;
    let resultMinValNodeIndex = 0;

    let k = lists.length;
    let f = new Array<boolean>(k);
    f = f.fill(false);

    let myLists = lists;
    while (true) {
        for (let i = 0; i < k; i++) {
            
            if (myLists[i] === null) {
                f[i] = true;
                continue;
            }

            if (myLists[i]!.val < resultMinValNode.val) {
                resultMinValNode = myLists[i]!;
                resultMinValNodeIndex = i;
            }
        }

        if (f.every((flag) => flag === true)) break;

        resultCurrNode.next = new ListNode(resultMinValNode.val);
        resultCurrNode = resultCurrNode.next;
        myLists[resultMinValNodeIndex] = myLists[resultMinValNodeIndex]!.next;
        resultMinValNode.val = Number.MAX_SAFE_INTEGER;
    }

    return resultHead.next;
};

let l11 = new ListNode(0);
let l12 = new ListNode(3);
let l13 = new ListNode(6);
l12.next = l13;
l11.next = l12;

let l21 = new ListNode(1);
let l22 = new ListNode(4);
let l23 = new ListNode(7);
l22.next = l23;
l21.next = l22;

let l31 = new ListNode(2);
let l32 = new ListNode(5);
let l33 = new ListNode(8);
l32.next = l33;
l31.next = l32;

let listArr = [l11, l21, l31];
let res = mergeKSortedLists(listArr);
let currRes = res;
while (currRes) {
    console.log(currRes.val);
    currRes = currRes.next;
}

export {};