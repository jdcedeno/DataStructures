export class ListNode {
    private _next: ListNode | null;

    constructor(
        private _value: number = 0
    ) {
        this._next = null;
    }

    get next(): ListNode | null {
        return this._next;
    }

    set next(listNode: ListNode | null) {
        this._next = listNode;
        return;
    }

    get value(): number {
        return this._value;
    }

    set value(newValue: number) {
        this._value = newValue;
        return;
    }
}
