const insertSort = ((array)=> {
  if (array.length == 0 || !Array.isArray(array)){
    throw new Error('error');
  }
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] >array[j]) {
      let storage = array[j];
      array[j] = array[j-1];
      array[j-1] = storage;
      j = j-1;
    }
  }
  return array;
});

export default insertSort








//
//
// const insertSort = ((array)=> {
// //we need a loop
//   for (let i = 0; i < array.length; i++) {
//     //then we need another loop, wikipedia says it's a while loop
//     let j = i;
//     while (j > 0 && array[j - 1] >array[j]) {
//       //do our swap function, we can pirate that from bubble
//       let storage = array[j];
//       array[j] = array[j-1];
//       array[j-1] = storage;
//       //set j back one index
//       j = j-1;
//     }
//   }
//   return array;
// });
