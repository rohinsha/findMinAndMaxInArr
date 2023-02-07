function findMinMaxItemInArr(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
      i = -1;
    }
  }
  //console.log(arr);
  let newArr = arr.filter((item, i) => {
    return arr.indexOf(item) === i;
  });
  return {
    ar: newArr,
    min: newArr[0],
    max: newArr[newArr.length - 1]
  };
}

console.log(findMinMaxItemInArr([3, 2, 4, 2, 9, 6, 4]));
