import { Model } from "../Model";

test("Verifies that Model has the correct attributes", () => {
  expect(Model.QICORE.valueOf()).toEqual("QI-Core v4.1.1");
});
