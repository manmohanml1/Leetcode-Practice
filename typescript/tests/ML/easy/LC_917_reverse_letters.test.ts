import { reverseOnlyLetters } from "../../../src/ML/easy/LC_917_reverse_letters";

test("reverseOnlyLetters example test1", () => {
  expect(reverseOnlyLetters("ab-cd")).toEqual("dc-ba");
});

test("reverseOnlyLetters example test2", () => {
  expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toEqual("j-Ih-gfE-dCba");
});

test("reverseOnlyLetters example test3", () => {
  expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toEqual(
    "Qedo1ct-eeLg=ntse-T!"
  );
});
