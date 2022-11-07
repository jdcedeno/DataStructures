"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Nodo {
    constructor(_value = 0, _next = null) {
        this._value = _value;
        this._next = _next;
    }
}
class LinkedList {
    constructor(_first = new Nodo(), _last = null) {
        this._first = _first;
        this._last = _last;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map