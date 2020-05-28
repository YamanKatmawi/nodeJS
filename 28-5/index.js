// const { sum } = require("./script");
const { prepareString } = require("./script");
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);
// let x = parseFloat(args[0]);
// let y = parseFloat(args[1]);
// console.log(`x+y=${sum(x, y)}`);
// console.log(`x-y=${sub(x, y)}`);
if (args.includes("--help")) {
  showHelp();
}
