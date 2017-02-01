const bubbleSort = ((array)=> {
  array.forEach(()=>{
  for (let i = 0; i < array.length; i ++){
    if (array[i] < array [i-1]){
      let store = array[i];
      array[i] = array[i-1];
      array[i-1] = store;
    }
   }
  })
  return array;
});

export default bubbleSort


/////////WROTE INSERTION SORT FIRST ON ACCIDENT
// const bubbleSort = ((array)=> {
//   array.forEach(()=>{
//     for (let i = 0; i < array.length; i++){
//     if (array[i-1] > array[i]){
//       let storage = array[i];
//       array[i] = array[i-1];
//       array[i-1] = storage;
//       }
//     };
//   });
//   return array;
// });
//^^^^^^^^^did i fuck up and write an insertion sort?
//YEP. good job.
// const bubbleSort = ((array)=> {
//   for (let i = 0; i < array.length; i++){
//     if (array[i] > array[i+1]) {
  // swap works but is getting stopped
//       let storage = array[i+1];
//       array[i+1] = array[i];
//       array[i] = storage;
//       return array;
//     }
//   }
// why can't I call you from yourself??!
//   bubbleSort(array);
// });
//if max iterations needed to sort is n, then outer for loop needed to run inner for loop
//
