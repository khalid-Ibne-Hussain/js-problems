function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 6]));
