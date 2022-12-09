import { LinkedList } from "../LinkedList.js";

// Find the Kth node from the end of a linked list in one pass
// [10 -> 20 -> 30 -> 40 -> 50]
// K = 1 (50)
// K = 2 (40)
// K = 3 (30)

export class KthNodeFromEnd extends LinkedList {
    constructor(val?: number | null) {
        super(val);
    }

    kthNodeFromEnd(k: number): number | undefined {
        // //MY WAY IF WE KNOW THE SIZE OF THE LIST
        // if (this.isEmpty() || k <= 0 || !Number.isInteger(k) || k > this.size)
        //     return undefined;

        // let idx = this.size - k;
        // let current = this.first;
        // while (idx > 0) {
        //     current = current!.next;
        //     idx--;
        // }

        // return current?.value;

        // //WHAT IF WE DONT HAVE THE SIZE OF THE LIST? USE TWO-POINTERS
        if (this.isEmpty() || k <= 0 || !Number.isInteger(k))
            return undefined;

        let a = this.first;
        let b = this.first;
        for (let i = 0; i < k - 1; i++) {
            b = b!.next;
            if (b === null) {
                return undefined;
            }
        }
        while (b !== this.last) {
            a = a!.next;
            b = b!.next;
        }
        
        return a!.value;
    }
}