function isLetter(char) {
  return (/[a-zA-Z]/).test(char);
}

function caesar(str, shift) {
  let arr = str.split('');
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isLetter(arr[i])) {
      let charCode = arr[i].charCodeAt(0);
      let shiftedCode = (((charCode - 97 + shift) % 26) + 97);
      result.push(String.fromCharCode(shiftedCode))
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

export default caesar;