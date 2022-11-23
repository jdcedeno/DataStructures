import { Node } from "./Node.js";

export class LinkedList {
    private _first: Node | null;
    private _last: Node | null;
    private _size: number;

    constructor(val?: number | null) {
        if (val == null) {
            this._first = this._last = null;
            this._size = 0;
        } else {
            this._first = this._last = new Node(val);
            this._size = 1;
        }
    }

    get first(): Node | null {
        return this._first;
    }

    get last(): Node | null {
        return this._last;
    }

    addFirst(val: number): void {
        if (this.isEmpty()) {
            this._first = this._last = new Node(val);
            this._size++;
        } else {
            let newFirst = new Node(val);
            newFirst.next = this._first;
            this._first = newFirst;
            this._size++;
        }

        return;
    }

    addLast(val: number): void {
        if (this.isEmpty()) {
            this._first = this._last = new Node(val);
            this._size++;
        } else {
            this._last!.next = this._last = new Node(val);
            this._size++;
        }

        return;
    }

    clear(): void {
        this._first = null;
        this._last = null;
        this._size = 0;
        return;
    }

    contains(val: number): Boolean {
        return this.indexOf(val) == -1 ? false: true;
    }

    indexOf(val: number): number {
        if (this.isEmpty())
            return -1;
        
        let index = 0;
        let currentNode = this._first;
        while (currentNode !== null) {
            if (currentNode.value === val) {
                return index;
            } else {
                currentNode = currentNode.next;
                index++;
            }
        }

        return -1;
    }

    insert(val: number, index: number): void {
        if (!Number.isInteger(index) || index < 0 || index > this._size)
            return;
        
        if (this.isEmpty()) {
            this._first = this._last = new Node(val);
            this._size++;
            return;
        }

        let currentNode = this._first;
        if (currentNode!.next === null) {
            currentNode!.next = this._last = new Node(val);
            this._size++;
            return;
        }

        if (index === 0) {
            let newNode = new Node(val);
            this._first = newNode;
            this._first.next = currentNode;
            this._size++;
            return;
        }

        let currentIndex = 0;
        while (currentNode !== null) {
            if (currentIndex + 1 === index) {
                let newNode = new Node(val);
                let newNodeNext = currentNode.next;
                currentNode.next = newNode;
                newNode.next = newNodeNext;
                this._size++;
                return;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
    }

    isEmpty(): Boolean {
        return this._first === null;
    }

    removeFirst(): void {
        if (this.isEmpty())
            return;
        
        this._first = this._first!.next;
        this._size--;

        if (this._first === null)
            this.clear();

        return;
    }

    removeLast(): void {
        if (this.isEmpty())
            return;

        let previousNode = this._first!;
        let currentNode = this._first!.next;

        if (currentNode === null) {
            this.clear();
            return;
        }

        while (currentNode !== null) {
            if (currentNode.next === null) {
                previousNode.next = null;
                this._last = previousNode;
                this._size--;
                return;
            }

            previousNode = previousNode.next!;
            currentNode = currentNode.next;
        }

        return;
    }

    get size(): number {
        return this._size;
    }

    toArray(): Array<number> {
        let list = new Array<number>;

        if (this.isEmpty())
            return list;

        let currentNode = this._first;
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return list;
    }
}
