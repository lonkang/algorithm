const bubbleSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

const arr = bubbleSort([5, 4, 3, 2, 1]);
console.log(arr); // [1, 2, 3, 4, 5]
