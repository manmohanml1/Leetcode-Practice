import { reverseString2 } from "../../../src/ML/easy/LC_344_reverse_string";

describe("reverseString", () => {
  it("should reverse a normal string array", () => {
    const input = ["h", "e", "l", "l", "o"];
    reverseString2(input);
    expect(input).toEqual(["o", "l", "l", "e", "h"]);
  });

  it("should handle an empty array", () => {
    const input: string[] = [];
    reverseString2(input);
    expect(input).toEqual([]);
  });

  it("should handle a single-character array", () => {
    const input = ["a"];
    reverseString2(input);
    expect(input).toEqual(["a"]);
  });

  it("should reverse a palindrome", () => {
    const input = ["m", "a", "d", "a", "m"];
    reverseString2(input);
    expect(input).toEqual(["m", "a", "d", "a", "m"]);
  });
});
