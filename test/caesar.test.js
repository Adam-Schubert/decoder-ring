const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift is 0", () => {
    const actual = caesarModule.caesar("Shift is 0 ->", 0, true);
    expect(actual).to.be.false;
  });
  it("should return false if shift is less than -25", () => {
    const actual = caesarModule.caesar("Shift is less than -26 ->", -26, true);
    expect(actual).to.be.false;
  });
  it("should return false if shift is greater than 25", () => {
    const actual = caesarModule.caesar("Shift is greater than 25 ->", 26, true);
    expect(actual).to.be.false;
  });
  it("should return false if shift is undefined", () => {
    const actual = caesarModule.caesar("Shift is undefined ->", undefined, true);
    expect(actual).to.be.false;
  });
  it("ignores capital letters", () => {
    const expected = "bc";
    const actual = caesarModule.caesar("Ab", 1, true);
    expect(actual).to.equal(expected);
  });
  it("should wrap around the alphabet", () => {
    const expected = "a";
    const actual = caesarModule.caesar("z", 1, true);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces throughout", () => {
    const expected = "ifz ifz ifz";
    const actual = caesarModule.caesar("hey hey hey", 1, true);
    expect(actual).to.equal(expected);
  });
});
