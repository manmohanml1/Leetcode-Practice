import { mostFrequentEven } from "../../../src/ML/easy/LC_2404_most_freq_even_element";

test("most Frequent Even element example test1", () => {
  expect(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])).toEqual(2);
});

test("most Frequent Even element example test2", () => {
  expect(mostFrequentEven([4, 4, 4, 9, 2, 4])).toEqual(4);
});

test("most Frequent Even element example test3", () => {
  expect(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])).toEqual(-1);
});

test("most Frequent Even element example test4", () => {
  expect(mostFrequentEven([0, 0, 0, 0])).toEqual(0);
});
