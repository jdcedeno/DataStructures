import { LinkedList } from "./LinkedList.js";
import { ListNode } from "./ListNode.js";

describe("LinkedList", () => {
    it("creates an empty linked list when no argument is given", () => {
        let result = new LinkedList();
        expect(result).toMatchObject({
            _first: null,
            _last: null,
            _size: 0
        });
    });

    it("creates a linked list with the expected properties when given a value", () => {
        let result = new LinkedList(1);
        expect(result).toMatchObject({
            _first: new ListNode(1),
            _last: new ListNode(1),
            _size: 1
        });
    });

    it("the addFirst method appends the given value as a node at the start of the list when the list is empty", () => {
        let result = new LinkedList();
        result.addFirst(0);
        expect(result).toMatchObject({
            _first: new ListNode(0),
            _last: new ListNode(0),
            _size: 1
        });
    });

    it("the addFirst method appends the given value as a node at the start of the list when the list has one element", () => {
        let first = new ListNode(0);
        let last = new ListNode(1);
        first.next = last;
        let result = new LinkedList(1);
        result.addFirst(0);
        expect(result).toMatchObject({
            _first: first,
            _last: last,
            _size: 2
        });
    });

    it("the addFirst method appends the given value as a node at the start of the list when the list has two elements", () => {
        let first = new ListNode(0);
        let second = new ListNode(1);
        let last = new ListNode(2);
        second.next = last;
        first.next = second;
        let result = new LinkedList(2);
        result.addFirst(1);
        result.addFirst(0);
        expect(result).toMatchObject({
            _first: first,
            _last: last,
            _size: 3
        });
    });

    it("the addLast method appends the given value as a node at the start of the list when the list is empty", () => {
        let result = new LinkedList();
        result.addLast(0);
        expect(result).toMatchObject({
            _first: new ListNode(0),
            _last: new ListNode(0),
            _size: 1
        });
    });

    it("the addLast method appends the given value as a node at the end of the list when the list has one element", () => {
        let first = new ListNode(0);
        let last = new ListNode(1);
        first.next = last;
        let result = new LinkedList(0);
        result.addLast(1);
        expect(result).toMatchObject({
            _first: first,
            _last: last,
            _size: 2
        });
    });

    it("the addLast method appends the given value as a node at the end of the list when the list has two elements", () => {
        let first = new ListNode(0);
        let second = new ListNode(1);
        let last = new ListNode(2);
        second.next = last;
        first.next = second;
        let result = new LinkedList(0);
        result.addLast(1);
        result.addLast(2);
        expect(result).toMatchObject({
            _first: first,
            _last: last,
            _size: 3
        });
    });

    it("the contains method returns false if no value is found", () => {
        let myList = new LinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        myList.addLast(0);
        let result = myList.contains(3);
        expect(result).toBe(false);
    });

    it("the contains method returns true if the given value is found", () => {
        let myList = new LinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        myList.addLast(0);
        let result = myList.contains(2);
        expect(result).toBe(true);
    });

    it("the indexOf method returns the index of the first instance of a given value", () => {
        let myList = new LinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        myList.addLast(0);
        let result = myList.indexOf(0)
        expect(result).toBe(0);
    });

    it("the indexOf method returns -1 if no value is found", () => {
        let myList = new LinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        myList.addLast(0);
        let result = myList.indexOf(3);
        expect(result).toBe(-1);
    });

    it("the insert method places a value at first position of an empty list", () => {
        let result = new LinkedList();
        result.insert(10, 0);
        expect(result).toMatchObject({
            _first: new ListNode(10),
            _last: new ListNode(10),
            _size: 1
        });
    });

    it("the insert method places a value at first position of a non-empty list", () => {
        let result = new LinkedList(20);
        result.insert(10, 0);
        let first = new ListNode(10);
        let second = new ListNode(20);
        first.next = second;
        expect(result).toMatchObject({
            _first: first,
            _last: second,
            _size: 2
        });
    });

    it("the insert method places a value at last position of a list with one element", () => {
        let result = new LinkedList(1);
        result.insert(2, 1);
        let first = new ListNode(1);
        let second = new ListNode(2);
        first.next = second;
        expect(result).toMatchObject({
            _first: first,
            _last: second,
            _size: 2
        });
    });

    it("the insert method places a value at last position of a list with two elements", () => {
        let result = new LinkedList(1);
        result.insert(2, 1);
        result.insert(3, 2);
        console.log(result);
        let first = new ListNode(1);
        let second = new ListNode(2);
        let third = new ListNode(3);
        second.next = third;
        first.next = second;
        expect(result).toMatchObject({
            _first: first,
            _last: third,
            _size: 3
        });
    });

    it("the insert method places a value at given position in a list with two elements", () => {
        let result = new LinkedList(1);
        result.insert(3, 1);
        result.insert(2, 1);
        let first = new ListNode(1);
        let second = new ListNode(2);
        let third = new ListNode(3);
        second.next = third;
        first.next = second;
        expect(result).toMatchObject({
            _first: first,
            _last: third,
            _size: 3
        });
    });

    it("the removeFirst method removes a value at the start of a list", () => {
        let result = new LinkedList(2);
        result.addFirst(1);
        result.addFirst(0);
        result.removeFirst();

        let first = new ListNode(1);
        let second = new ListNode(2);
        first.next = second;

        expect(result).toMatchObject({
            _first: first,
            _last: second,
            _size: 2
        });
    });

    it("the removeLast method removes a value at the end of a list", () => {
        let result = new LinkedList(0);
        result.addLast(1);
        result.addLast(2);
        result.removeFirst();

        let first = new ListNode(1);
        let second = new ListNode(2);
        first.next = second;

        expect(result).toMatchObject({
            _first: first,
            _last: second,
            _size: 2
        });
    });

    it("returns an array of values corresponding to the nodes in the list", () => {
        let myList = new LinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        myList.addLast(3);
        myList.addLast(4);
        let result = myList.toArray();
        expect(result).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
    })
});
