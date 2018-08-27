/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/

"use strict";

var a = [1, 2, 3];

var b;

//Copy array here
b = a.slice(); // slice the last element array now equal [1, 2, 3];
b.push("newElement"); // be now equal [1, 2, 3, 'newElement'];

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
