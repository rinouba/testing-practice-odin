function getSum(arr) {
  let total = 0;
  for (let num in arr) {
    total += arr[num];
  }
  return total;
}

function findMinNum(arr) {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}

function findMaxNum(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maxNum ) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

function analyzeArray(arr) {
  const object = {
    average: getSum(arr) / arr.length,
    min: findMinNum(arr),
    max: findMaxNum(arr),
    length: arr.length,
  }
  return object;
}

export default analyzeArray;