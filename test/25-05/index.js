console.log(process);
// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });
// const args = process.argv.slice(2);
// console.log(args);
// console.log(`hey ${args[0]}`);
const fs = require("fs");
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
console.log("hole");
fs.writeFile("new.txt", "this is create file in nodeJs", (err) => {
  if (err) throw err;
  console.log("************* Hi ************");
});
console.log("Hi");
