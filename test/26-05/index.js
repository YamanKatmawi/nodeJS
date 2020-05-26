// console.log(process);
// const print = require("./stars");
const args = process.argv.slice(2);
// print(args[0], args[1]);
function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not number. please try again`);
    process.exit();
  }
  return number;
}
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}
const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
//sum 3 5 6
//avg 45 6 67
switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  case "mid":
    console.log(mid(numbers));
    break;
  default:
    console.log(
      "I cannot do this, please type sum to calculate Sum or avg to calculate Avg"
    );
}
