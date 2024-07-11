const args = process.argv.slice(2);

const sum = args.reduce((pre, curr) => {
  return Number(pre) + Number(curr);
});
console.log(sum);
