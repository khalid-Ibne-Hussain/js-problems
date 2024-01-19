function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  console.log(str);
  if (str == reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("level"));
