const twoSum = require("./twoSum.js");
const file = require.resolve("./twoSum.py");
const { spawn } = require("child_process");
// const pyFunc = spawn("python", ["./twoSum.py"]);

describe("Two Sum", () => {
  test("Two or more elements", done => {
    expect(twoSum([2, 7, 3, 5], 9)).toStrictEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    done();
  });
});

describe("Two Sum in Python", () => {
  test("Two or more elements", async () => {
    try {
      let test1Args = [[2, 7, 3, 5], 9];
      let args = [file].concat(test1Args);
      const pyFunc = await spawn("python", args);
      await pyFunc.stdout.setEncoding("utf8");
      let output;
      await pyFunc.stdout.on("data", async function(data) {
        await console.log("data:", data);
        output = data;
        console.log("what here2?");
        // expect(data).resolves.toStrictEqual([0, 1]);
      });
      console.log(await output);
      await expect(output).toStrictEqual([0, 1]);
    } catch (err) {
      await console.log(err);
    }
  });
});
