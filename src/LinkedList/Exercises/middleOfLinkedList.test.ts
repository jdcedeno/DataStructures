import { middleOfLinkedList } from "./middleOfLinkedList.js";

describe("middleOfLinkedList", () => {
    it("prints the middle value of a list with 3 items", () => {
        let myList = new middleOfLinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        let result = myList.middle();

        expect(result).toEqual(expect.arrayContaining([1]));
    });

    it("prints the two middle values of a list with 4 items", () => {
        let myList = new middleOfLinkedList(0);
        myList.addLast(1);
        myList.addLast(2);
        myList.addLast(3);
        let result = myList.middle();

        expect(result).toEqual(expect.arrayContaining([1, 2]));
    });
})