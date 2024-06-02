const quickSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  const pivot = Math.floor(len / 2);
  const pivotValue = arr[pivot];

  const left = [];
  const right = [];
  for (let i = 0; i < len; i++) {
    const value = arr[i];
    if (value === pivotValue) continue;
    if (value < middleValue) {
      left.push(value);
    } else {
      right.push(value);
    }
  }
  return quickSort(left).concat(pivotValue, quickSort(right));
};

const arr = quickSort([5, 4, 3, 2, 1]);
console.log(arr); // [1, 2, 3, 4, 5]
