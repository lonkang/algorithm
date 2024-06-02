const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr; // 如果数组长度小于等于1，则返回数组
  const mid = Math.floor(len / 2); // 找到数组的中间位置
  const left = arr.slice(0, mid); // 分割成左半部分
  const right = arr.slice(mid); // 分割成右半部分
  return merge(mergeSort(left), mergeSort(right)); // 递归地对左右两部分进行排序并合并
};

const arr = mergeSort([5, 4, 3, 2, 1]);
console.log(arr); // [1, 2, 3, 4, 5]
