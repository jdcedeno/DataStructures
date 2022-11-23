import { LinkedList } from "./LinkedList/LinkedList.js";

let myList = new LinkedList();

console.log(myList);

// myList.addLast(10);
// myList.addLast(15);
// myList.addFirst(5);
// myList.addFirst(0);

// console.log("\x1b[33m%s\x1b[0m", "%%%%%%%%%%% start %%%%%%%%%%%");


// let start = myList.first;
// while (start != null) {
//     console.log("%%%%");
    
//     console.log(start);
//     start = start.next;
// }

// console.log("%%% %%%%");
// console.log(myList);

// console.log("%%% indexOf %%%%");
// console.log(myList.indexOf(0)); //expected 0
// console.log(myList.indexOf(5)); //expected 1
// console.log(myList.indexOf(10)); //expected 2
// console.log(myList.indexOf(15)); //expected 3
// console.log(myList.indexOf(-1)); //expected -1
// console.log(myList.indexOf(20)); //expected -1

// console.log("%%% contains %%%%");
// console.log(myList.contains(0)); //expected true
// console.log(myList.contains(5)); //expected true
// console.log(myList.contains(10)); //expected true
// console.log(myList.contains(15)); //expected true
// console.log(myList.contains(-1)); //expected false
// console.log(myList.contains(20)); //expected false

// // console.log("%%% removeFirst %%%%");
// // myList.removeFirst();
// // console.log(myList);
// // myList.removeFirst();
// // console.log(myList);
// // myList.removeFirst();
// // console.log(myList);
// // myList.removeFirst();
// // console.log(myList);

// console.log("%%% removeLast %%%%");
// myList.removeLast();
// console.log(myList);
// myList.removeLast();
// console.log(myList);
// myList.removeLast();
// console.log(myList);
// myList.removeLast();
// console.log(myList);

// console.log("%%% size %%%%");
// console.log(myList.size); //expect 0
// myList.addFirst(0);
// console.log(myList.size); //expect 1
// myList.addFirst(5);
// console.log(myList.size); //expect 2
// myList.addFirst(10);
// console.log(myList.size); //expect 3
// myList.removeLast();
// console.log(myList.size); //expect 2
// myList.removeLast();
// console.log(myList.size); //expect 1
// myList.removeLast();
// console.log(myList.size); //expect 0
// console.log(myList);

// console.log("%%% toArray %%%%");
// myList.addLast(0);
// myList.addLast(5);
// myList.addLast(10);
// myList.addLast(15);
// let myArray = myList.toArray();

// console.log(myList);
// console.log(myArray);

// console.log("\x1b[33m%s\x1b[0m", "%%%%%%%%%%% start %%%%%%%%%%%");
// console.log("- testing invalid index values");
// myList.insert(5, -1); // index is negative
// myList.insert(5, 4); // index is greater than list size
// myList.insert(5, 0.4); //index is not an integer
// console.log(myList);


// console.log("- insert at index 0 into empty list");
// myList.insert(5, 0) //expect [5]
// console.log(myList);

// console.log("- insert at index 1 into list with one node");
// myList.insert(15, 1) //expect [5, 15]
// console.log(myList);

// console.log("- insert at index 1 into list with two nodes");
// myList.insert(10, 1) //expect [5, 10, 15]
// console.log(myList);

// console.log("- insert at index 0 into list with three nodes");
// myList.insert(0, 0) //expect [0, 5, 10, 15]
// console.log(myList);

// console.log("- insert at index 4 into list with four nodes");
// myList.insert(20, 4) //expect [0, 5, 10, 15, 20]
// console.log(myList);