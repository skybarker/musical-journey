import { expect, test } from "vitest";
import { add2Nums } from ".";

test("add2Nums", () => {
  expect(add2Nums(1, 2)).toBe(3);
  expect(add2Nums(3, 4)).toBe(7);
  expect(add2Nums(5, 6)).toBe(11);
});
