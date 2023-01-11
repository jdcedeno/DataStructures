/** Problem Statement:
 * Create a javascript function that will remove trailing
 * and leading zeroes.  num will be passed in as a string.
 * The function should return a string.
 */

function RemoveZeroes(num: string): string {
    let result = num.replace(/^0*(?=0$)|^0*(?=[1-9])|^0*(?=0\.)|\.0*$|(?<=\..*)0*$/g,"");

    return result;
}




let test1 = "0"; // expect 0
let test2 = "1"; // expect 1
let test3 = "100"; // expect 100
let test4 = "0001"; // expect 1
let test5 = "1.0"; // expect 1
let test6 = "1.01"; // expect 1.01
let test7 = "1.0100"; // expect 1.01
let test8 = "00100.0000"; // expect 100
let test9 = "00100.012000"; // expect 100.012

let result1 = RemoveZeroes(test1);
let result2 = RemoveZeroes(test2);
let result3 = RemoveZeroes(test3);
let result4 = RemoveZeroes(test4);
let result5 = RemoveZeroes(test5);
let result6 = RemoveZeroes(test6);
let result7 = RemoveZeroes(test7);
let result8 = RemoveZeroes(test8);
let result9 = RemoveZeroes(test9);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);

export {}