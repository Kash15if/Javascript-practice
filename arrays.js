const arr = ["A", "2", 3, true, "Sentence contains multiple words", 12];

//toString()
console.log(
  "toString() method converts an array to a string of (comma separated) array values."
);
let arrString = arr.toString();
console.log(arrString);
console.log("chat at a[i] is", arrString[3]);

//join
console.log(
  "join() same as but can insert parameter inplace of comma and dont include comma."
);
let arrJoin = arr.join(" ## ");
console.log(arrJoin);

//push , pop
console.log(
  "array works as stack when we use push pop also it \
  modifies original array and pop returns popped element and push returns new array length"
);
console.log("pop", arr.pop());
console.log("push", arr.push("pushed Element"));
console.log("pop", arr);

//shift
console.log(
  "shift() method removes the first array element and shifts all other elements to a lower index. and unshift is vice versa"
);
console.log("shift", arr.shift());
console.log("shifted arrays", arr);
console.log("unshidft", arr.unshift("Lemon"));
console.log("unshifted array", arr);

//change elements
console.log("element can be Channed and accessed by its index");
arr[0] = "Orange";
console.log("changed array", arr);

//length
console.log("length , .length property", arr.length);

//delete
console.log(
  "delete from index make the value of that particular index undefined thatswhy avoid it"
);
console.log("syntax", "delete arr[i]");
delete arr[0];
console.log(arr);

//merging using concat or spread operator
console.log(
  "concat doesnot merge original array. It also takes string as a parameter"
);
let arr2 = ["2ndArr 1", "2ndArr 2"];
let arr3 = ["3rdArr 1", "3rdArr 2"];
const mergedArr = arr.concat(arr2, arr3);
console.log("arr", arr);
console.log("mergerArr", mergedArr);

//splice and slice an array
console.log(
  "The splice() method adds new items to an array.The slice() method slices out a piece of an array."
);

console.log(
  "Syntax -> .splice(2, 0, 'Lemon', 'Kiwi'). parameter1 = where new elements should be added , para2=how many elements should be removed. para3=rest of the parameters to be added"
);
console.log("before splice", arr);
arr.splice(2, 0, "Lemon", "Kiwi");
console.log("after splice", arr);
console.log("splice modifies original array");

console.log(
  "slice() method slices out a piece of an array into a new array. returns new array and doesnot modifies old array"
);
console.log(
  "Syntax -> .slice(2) or .slice(1,4). returns array with elements from 1 to 4. from and to index"
);
console.log("before splice", arr);
const slicedArray = arr.splice(2, 0, "Lemon", "Kiwi");
console.log("after splice", arr);

//other methods
console.log("Syntax:-> .sort();. It will modify original array");
console.log("Syntax:-> .reverse();. It will modify original array");
console.log(
  "Javascript sort by converting value to a string. To overcome this we need a callback for numbers Syntax:-> .sort(function(a, b){return a - b});. It will modify original array"
);

//min max
console.log(
  "Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)."
);

//----------------------------------------------

//=------------------------------------------------

console.log("Loops and traversals");

console.log(
  "Syntax:-> .forEach((item, index)={console.log(item, index)});. Callback doesnot return anything"
);

console.log(
  "If we pass function name and function is declared somewhere else then pass array as well in fun decleration"
);

console.log(
  "Syntax:-> .map((item, index)={ return item*2});. Callback should return something and it will be stored in new array"
);

console.log(
  "Syntax:-> .filter((item, index)={ return item > 2});. Callback should return boolean value and if true then it will be stored in new array"
);

console.log(
  "Syntax:-> const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue(optional)); Returns initial value. Helps in calculations from array like sum , mul "
);
console.log(
  "Reduces works from left to right and reduceRight works opposite. It doesnot affect original arrayv and returns a single value"
);

console.log(".every((item)={ return item > 2});");
console.log("every() method returns true if all array values pass a test.");

console.log(
  "some() method returns true if any array values pass a test. Same syntax like every"
);

console.log('.indexOf("elemenet Name")');
console.log(
  "array.indexOf(item, start). start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end."
);

console.log(
  "The find() and findIndex method returns the value of the first array element that passes a test function. same as filter"
);

console.log(
  "Array.from(arrName). method returns an Array object from any object with a length property or any iterable object."
);
const a12 = "ABCDEF";
console.log(Array.from(a12));

console.log(
  "The Array.keys() method returns an Array Iterator object with the keys of an array."
);

const a13 = [1, 2, 4];
const keys = a13.keys();

for (x of keys) {
  console.log(x);
}
