/** PROBLEM STATEMENT:
 * 2. Add two numbers
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single 
 * digit. Add the two numbers and return the sum as a linked list. You may assume 
 * the two numbers do not contain any leading zero, except the number 0 itself.
 */

// 30 minutes coming up with a solution, test the most basic case and it works

/**
 * 2 -> 6 -> 4 (462)
 * +
 * 5 -> 4 -> 1 (145)
 * =
 * 7 -> 0 -> 6 (607)
 * 
 * must deal with carry-on values (6 + 4 = 0, carry-on 1)
 */

import { LinkedList } from "../LinkedList.js";

// Using my LinkedList class
function addTwoNumbers(list1: LinkedList, list2: LinkedList): LinkedList {
    let carryValue = 0;
    let currentVal1 = list1.first;
    let currentVal2 = list2.first;
    let result = new LinkedList();
    while (currentVal1 !== null || currentVal2 !== null) {
        let val1 = currentVal1?.value ?? 0;
        let val2 = currentVal2?.value ?? 0;
        let sum = val1 + val2 + carryValue;
        carryValue = 0;
        if (sum >= 10) {
            carryValue = 1;
            sum -= 10;
        }
        result.addLast(sum);
        if (currentVal1) currentVal1 = currentVal1.next;
        if (currentVal2) currentVal2 = currentVal2.next;
    }

    return result;
};

// let l1 = new LinkedList(2);
// l1.addLast(4);
// l1.addLast(3);

// let l2 = new LinkedList(5);
// l2.addLast(6);
// l2.addLast(4);

// let result = addTwoNumbers(l1, l2);
// console.log(result.toArray());


//Using Leetcode's ListNode class to solve the problem
//Took 1h 12m
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbersLeetCode(node1: ListNode | null, node2: ListNode | null): ListNode | null {
    let result : ListNode | null = null;
    let currentSum : ListNode | null = null;

    let carryOn = 0;
    let currentVal1 = node1;
    let currentVal2 = node2;
    
    while (currentVal1 !== null || currentVal2 !== null || carryOn != 0) {
        let digit1 = currentVal1?.val ?? 0;
        let digit2 = currentVal2?.val ?? 0;
        let sum = digit1 + digit2 + carryOn;

        carryOn = 0;
        
        if (sum >= 10) {
            carryOn = 1;
            sum -= 10;
        }

        if (result === null) {
            result = currentSum = new ListNode(sum);
        } else {
            currentSum!.next = new ListNode(sum);
            currentSum = currentSum!.next;
        }

        if (currentVal1) currentVal1 = currentVal1.next;
        if (currentVal2) currentVal2 = currentVal2.next;
    }

    return result;
}

let l11 = new ListNode(2);
let l12 = new ListNode(4);
let l13 = new ListNode(3);
l12.next = l13;
l11.next = l12;

let l21 = new ListNode(5);
let l22 = new ListNode(6);
let l23 = new ListNode(4);
l22.next = l23;
l21.next = l22;
/**
 * 2 -> 4 -> 3
 * +
 * 5 -> 6 -> 4
 * =
 * 7 -> 0 -> 8
 */
let result = addTwoNumbersLeetCode(l11, l21);
console.log("result:");
console.log(result);
let resultArray = [];
while (result) {
    resultArray.push(result.val);
    result = result.next;
}
console.log("resultArray:");
console.log(resultArray);