const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode letter i to 42", () => {
    const expected = "42";
    const actual = polybiusModule.polybius("i", true);
    expect(actual).to.equal(expected);
  });
  it("should encode letter j to 42", () => {
    const expected = "42";
    const actual = polybiusModule.polybius("j", true);
    expect(actual).to.equal(expected);
  });
  it("should decode 42 to (i/j)", () => {
    const expected = "(i/j)";
    const actual = polybiusModule.polybius("42", false);
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
    const expected = "1111";
    const actual = polybiusModule.polybius("Aa", true);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces throughout", () => {
    const expected = "11 11 11";
    const actual = polybiusModule.polybius("a a a", true);
    expect(actual).to.equal(expected);
  });
});
