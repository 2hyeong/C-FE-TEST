import { expect, describe, it } from "vitest";
import { toCurrency } from "./currency";

describe("currency", () => {
  it("toCurrency", () => {
    const tests = [
      { input: 0, expected: 0 },
      { input: 1, expected: "1원" },
      { input: 1000, expected: "1,000원" },
      { input: 1000000, expected: "1,000,000원" },
    ];

    tests.forEach((test) => {
      expect(toCurrency(test.input)).toBe(test.expected);
    });
  });
});
