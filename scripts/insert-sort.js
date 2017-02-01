const insertSort = ((array)=> {
  array.forEach(()=>{
    for (let i = 0; i < array.length; i++){
    if (array[i-1] > array[i]){
      let storage = array[i];
      array[i] = array[i-1];
      array[i-1] = storage;
      }
    }
  });
  return array;
});

////or
// const bubbleSort = ((array)=> {
//   array.forEach(()=>{
//     let swapped = false;
//     for (let i = 1; i < 5; i++){
//       if (array[i-1] > array[i]){
//         let storage = array[i];
//         array[i] = array[i-1];
//         array[i-1] = storage;
//         swapped = true;
//       }
//     }
//   })
//   return array;
// })

export default insertSort
