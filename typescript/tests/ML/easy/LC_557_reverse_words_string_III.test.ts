import { reverseWords } from "../../../src/ML/easy/LC_557_reverse_words_string_III";

test("reverseStr example test1", () => {
  expect(reverseWords("Let's take LeetCode contest")).toEqual(
    "s'teL ekat edoCteeL tsetnoc"
  );
});

test("reverseStr example test2", () => {
  expect(reverseWords("Mr Ding")).toEqual("rM gniD");
});
