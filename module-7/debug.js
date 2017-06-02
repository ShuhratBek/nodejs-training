function negativeSum(...args) {
  return arg.reduce((arg, total) => {
    return total-arg;
    }, 0);
}

console.log(negativeSum(1, 5, 10));
