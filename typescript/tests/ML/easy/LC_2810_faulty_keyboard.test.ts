import { finalString2 } from "../../../src/ML/easy/LC_2810_faulty_keyboard";

test("faulty keyboard example test1", () => {
  expect(finalString2("string")).toEqual("rtsng");
});

test("faulty keyboard example test2", () => {
  expect(finalString2("poiinter")).toEqual("ponter");
});
