import { KthNodeFromEnd } from "./kthNodeFromEnd.js";

describe("KthNodeFromEnd", () => {
    it("returns undefined if kthNode method is called on an empty list", () => {
        let myList = new KthNodeFromEnd();
        let result = myList.kthNodeFromEnd(0);
        expect(result).toBeUndefined();
    });

    it("returns undefined if kthNode method is called with a k larger than the size of the list", () => {
        let myList = new KthNodeFromEnd(0);
        myList.addLast(1);
        let result = myList.kthNodeFromEnd(3);
        expect(result).toBeUndefined();
    });

    it("returns the kth (2nd) node from the end of a linked list", () => {
        let myList = new KthNodeFromEnd(0);
        myList.addLast(1);
        let result = myList.kthNodeFromEnd(2);
        expect(result).toBe(0);
    });

    it("returns the kth (1st) node from the end of a linked list", () => {
        let myList = new KthNodeFromEnd(0);
        myList.addLast(1);
        let result = myList.kthNodeFromEnd(1);
        expect(result).toBe(1);
    });
});