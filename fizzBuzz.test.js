const assert = require("assert");
const toCamelCase = require("./fizzBuzz.js");

describe("FizzBuzz", () => {
  it("Should be loaded", () => {
    assert.equal(true, true);
  });

  xit("Should return fizz", () => {
    assert.equal(fizzBuzz(3), "fizz");
  });

  xit("Should return fizz", () => {
    assert.equal(fizzBuzz(6), "fizz");
    assert.equal(fizzBuzz(18), "fizz");
  });

  xit("Should return buzz", () => {
    assert.equal(fizzBuzz(5), "buzz");
  });

  xit("Should return buzz", () => {
    assert.equal(fizzBuzz(10), "buzz");
    assert.equal(fizzBuzz(25), "buzz");
  });

  xit("Should return fizzbuzz", () => {
    assert.equal(fizzBuzz(15), "fizzbuzz");
  });

  xit("Should return fizzbuzz", () => {
    assert.equal(fizzBuzz(30), "fizzbuzz");
    assert.equal(fizzBuzz(150), "fizzbuzz");
  });

  xit("Should return 2", () => {
    assert.equal(fizzBuzz(2), "2");
  });

  xit("Should return 8 and 52", () => {
    assert.equal(fizzBuzz(8), "8");
    assert.equal(fizzBuzz(52), "52");
  });
});
