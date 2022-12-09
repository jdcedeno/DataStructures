import { LinkedList } from "../LinkedList.js";

// Find the middle of a linked list in one pass. If the list has an even number of nodes, 
// there would be two middle nodes. (Note: Assume that you don’t know the size of the list ahead of time.)

export class middleOfLinkedList extends LinkedList {
    constructor(val?: number | null) {
        super(val);
    }

    middle(): Array<number> | undefined {
        if (this.isEmpty()) return undefined;

        let a = this.first;
        let b = this.first;
        while (b !== this.last && b!.next !== this.last) {
            b = b!.next!.next;
            a = a!.next;
        }

        if (b === this.last) return [a!.value];
        else return [a!.value, a!.next!.value];
    }
}