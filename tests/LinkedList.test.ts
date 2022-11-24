import { LinkedList } from "../src/LinkedList/LinkedList";

describe("LinkedList", () => {
    it("Creates an empty linked list when no argument is given", () => {
        let result = new LinkedList();
        expect(result).toMatchObject({
            _first: null,
            _last: null,
            _size: 0
        });
    });
});
