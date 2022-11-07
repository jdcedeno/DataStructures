class Node {
    constructor(
        private _value: Number = 0,
        private _next: Node | null = null
    ) {
    }
}

class LinkedList {
    constructor(
        private _first: Node = new Node(),
        private _last: Node | null = null
    ) {
    }
}

export {
    LinkedList
}