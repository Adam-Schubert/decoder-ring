const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("returns false if the given alphabet isn't exactly 26 characters", () => {
    const actual = substitutionModule.substitution(
      "The following alphabet is 27 characters",
      "zabcdefghijklmnopqrstuvwxyz",
      true
    );
    expect(actual).to.be.false;
  });
  it("correctly translates the given input based on the given alphabet", () => {
    const expected = "bcd";
    const actual = substitutionModule.substitution(
      "abc",
      "bcdefghijklmnopqrstuvwxyza",
      true
    );
    expect(actual).to.equal(expected);
  });
  const actual = substitutionModule.substitution(
    "Duplicates",
    "aaabbbcccdddeeefffggghhhii",
    true
  );
  expect(actual).to.be.false;
  it("should maintain spaces throughout", () => {
    const expected = "b c d";
    const actual = substitutionModule.substitution(
      "a b c",
      "bcdefghijklmnopqrstuvwxyza",
      true
    );
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
    const expected = "bc";
    const actual = substitutionModule.substitution(
      "Ab",
      "bcdefghijklmnopqrstuvwxyza",
      true
    );
    expect(actual).to.equal(expected);
  });
});
