var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(obj => {



return Math.sqrt((obj['x'] * obj['x']) + (obj['y'] * obj['y']));


});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// var kvArray = [{key: 1, value: 10},
//                {key: 2, value: 20},
//                {key: 3, value: 30}];

// var reformattedArray = kvArray.map(obj =>{
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });


//// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// var array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]
