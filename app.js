let fibArr = [0, 1];
function fibs(n) {
  if (n < 2) {
    return fibArr[n];
  }
  const fibNum = fibs(n - 1) + fibs(n - 2);
  fibArr[n] = fibNum;
  return fibNum;
}
fibs(8);
console.log(fibArr);
console.log("[0, 1, 1, 2, 3, 5, 8, 13].");
// console.log(fibArr); // [0, 1, 1, 2, 3, 5, 8, 13]
