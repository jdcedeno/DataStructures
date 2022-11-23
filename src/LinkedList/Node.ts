export class Node {
    private _next: Node | null;

    constructor(
        private _value: number = 0
    ) {
        this._next = null;
    }

    get next(): Node | null {
        return this._next;
    }

    set next(node: Node | null) {
        this._next = node;
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
