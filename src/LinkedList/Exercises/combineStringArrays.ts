/**Problem Statement:
 * Write a function to combine 2 arrays of strings removing 
 * duplicates. (Use any language or pseudo-code).
 */

function combineStringArrays(arrA: Array<string>, arrB: Array<string>): Array<string> {
    let arrASize = arrA.length;
    let arrBSize = arrB.length;
    let result = new Array<string>();
    let mySet = new Set<string>();
    
    if (arrASize === 0 && arrBSize === 0) return result;

    let count = (arrASize >= arrBSize) ? arrASize : arrBSize;

    for (let i = 0; i < count; i++) {
        if (i < arrASize) mySet.add(arrA[i]);
        if (i < arrBSize) mySet.add(arrB[i]);
    }
    
    mySet.forEach(val => result.push(val))

    return result;
}

let arrayA = ["hello", "world", "this", "is", "JD"];
let arrayB = ["hello", "JD", "all", "is", "yours", "for", "the", "taking"];
let result = combineStringArrays(arrayA, arrayB);
console.log(result);

export {}