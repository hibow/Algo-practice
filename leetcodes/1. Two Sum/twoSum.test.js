const twoSum = require("./twoSum.js");
const file = require.resolve("./twoSum.py");
const { spawn } = require("child_process");
// const pyFunc = spawn("python", ["./twoSum.py"]);
let test1Args = [[2, 7, 3, 5], 9];
let args = [file].concat(test1Args);
console.log(args);
const pyFunc = spawn("python", args);
pyFunc.stdout.setEncoding("utf8");
pyFunc.stdout.on("data", function(data) {
  console.log("data:", data);
});
pyFunc.stderr.on("data", function(data) {
  console.error(data.toString());
});
// describe("Two Sum", () => {
//   test("Two or more elements", () => {
//     expect(twoSum([2, 7, 3, 5], 9)).toStrictEqual([0, 1]);
//     expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
//   });
// });

// describe("Two Sum in Python", () => {
//   test("Two or more elements", () => {
//     let test1Args = [[2, 7, 3, 5], 9];
//     let args = ["./twoSum.py"].concat(test1Args);
//     const pyFunc = spawn("python", args);
//     pyFunc.stdout.on("data", function(data) {
//       console.log("data:", JSON.stringify(data));
//       expect(data).toStrictEqual([0, 1]);
//     });
//   });
// });
