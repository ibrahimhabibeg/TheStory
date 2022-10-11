const removeDuplicates = (arr) => {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if(arr[i]==arr[i-1]){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

module.exports = {removeDuplicates};