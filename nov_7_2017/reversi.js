function reverseString(str) {
  myvarA = str.split('');
  myvarB = myvarA.reverse();
  myvarC = myvarB.join("");
  return myvarC;
}
console.log(reverseString("amanaplanacanalpanama"));
