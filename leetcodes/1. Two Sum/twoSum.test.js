const twoSum = require("./twoSum.js");

describe("Two Sum", () => {
  test("Two or more elements", () => {
    expect(twoSum([2, 7, 3, 5], 9)).toStrictEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });
});
