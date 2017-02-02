const mergeSort = ((array)=> {
  if (array.length == 0 || !Array.isArray(array)){
    throw new Error('error');
  }
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  return mergeSides(mergeSort(left), mergeSort(right));
});

const mergeSides = ((leftSide, rightSide)=> {
  let completedArray = [];
  while (leftSide.length && rightSide.length) {
    if (leftSide[0] < rightSide[0]) {
      completedArray.push(leftSide.shift());
    } else {
      completedArray.push(rightSide.shift());
    }
  }
  return completedArray.concat(leftSide).concat(rightSide);
});

export default mergeSort










//
// const mergeSort = ((array)=> {
//   if (array.length < 2) {
//     return array;
//   }
//   let middle = Math.floor(array.length/2);
//   let left = array.slice(0, middle);
//   let right = array.slice(middle, array.length);
//   return mergeSides(mergeSort(left), mergeSort(right));
// });
//
// const mergeSides = ((leftSide, rightSide)=> {
//   let completedArray = [];
//   while (leftSide.length && rightSide.length) {
//     if (leftSide[0] < rightSide[0]) {
//       completedArray.push(leftSide.shift());
//     } else if (leftSide[0] > rightSide[0]) {
//       completedArray.push(rightSide.shift());
//     }
//   }
//   return completedArray.concat(leftSide).concat(rightSide);
// });
//
//
// const mergeSort = ((array)=> {
//   if (array.length = 1) {
//     return array;
//   } else {
//     let leftSide = [];
//     let rightSide = [];
//     for (let i = 0; i < array.length; i++) {
//       if (i <= array.length/2) {
//         leftSide.push(array[i]);
//       } else {
//         rightSide.push(array[i]);
//       }
//     }
//     return mergeSides(mergeSort(leftSide), mergeSort(rightSide));
//   }
// });
//
// const mergeSides ((leftSide, rightSide)=> {
//   let completedArray = [];
//   while (leftSide.length && rightSide.length) {
//     if (leftSide[0] < rightSide[0]) {
//       completedArray.push(leftSide.shift());
//     } else if (leftSide[0] > rightSide[0]) {
//       completedArray.push(rightSide.shift());
//     }
//   }
//   return completedArray.concat(leftSide).concat(rightSide);
// })
//
// export default mergeSort
//
// //
// // const mergeSort = ((array) => {
// //   if (array.length <= 1){
// //     return array;
// //   }
// //   let leftSide = [];
// //   let rightSide = [];
// //   for (var i = 0; i < array.length; i++) {
// //     if (i <= array.length/2) {
// //       leftSide.push(array[i]);
// //     } else {
// //       rightSide.push(array[i]);
// //     }
// //   }
// //   leftSide = mergeSort(leftSide);
// //   rightSide = mergeSort(rightSide);
// //   return mergeSides(leftSide, rightSide);
// // });
// //
// // const mergeSides = ((leftSide, rightSide) => {
// //   let result = [];
// //   while (leftSide !== [] && rightSide !== []) {
// //     if (leftSide[0] <= rightSide[0]) {
// //       result.push(leftSide[0]);
// //       leftSide.splice(0, 1);
// //     } else {
// //       result.push(rightSide[0]);
// //       rightSide.splice(0, 1);
// //     }
// //   }
// //   while (leftSide !== []) {
// //     result.push(leftSide[0]);
// //     leftSide.splice(0, 1);
// //   }
// //   while (rightSide !== []) {
// //     result.push(rightSide[0]);
// //     rightSide.splice(0, 1);
// //   }
// //   return result;
// // });
