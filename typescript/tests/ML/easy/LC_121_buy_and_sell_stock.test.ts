import { maxProfit2 } from "../../../src/ML/easy/LC_121_buy_and_sell_stock";

test("buy and sell stock example test1", () => {
  expect(maxProfit2([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test("buy and sell stock example test2", () => {
  expect(maxProfit2([7, 6, 4, 3, 1])).toEqual(0);
});

test("buy and sell stock example test3", () => {
  expect(maxProfit2([1, 2, 4])).toEqual(3);
});

test("buy and sell stock example test4", () => {
  expect(maxProfit2([2, 1, 2, 1, 0, 1, 2])).toEqual(2);
});
