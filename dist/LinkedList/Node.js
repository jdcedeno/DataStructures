export class Node {
    constructor(_value = 0) {
        this._value = _value;
        this._next = null;
    }
    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
        return;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
        return;
    }
}
//# sourceMappingURL=Node.js.map