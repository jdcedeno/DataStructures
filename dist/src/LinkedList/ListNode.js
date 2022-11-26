export class ListNode {
    constructor(_value = 0) {
        this._value = _value;
        this._next = null;
    }
    get next() {
        return this._next;
    }
    set next(listNode) {
        this._next = listNode;
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
//# sourceMappingURL=ListNode.js.map