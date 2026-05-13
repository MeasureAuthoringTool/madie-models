import { Model } from "../Model";

test("Verifies that Model has the correct attributes", () => {
  expect(Model.QICORE.valueOf()).toEqual("QI-Core v4.1.1");
  expect(Model.QICORE_6_0_0.valueOf()).toEqual("QI-Core v6.0.0");
  expect(Model.QICORE_7_0_2.valueOf()).toEqual("QI-Core v7.0.2");
  expect(Model.QDM_5_6.valueOf()).toEqual("QDM v5.6");
  expect(Model.US_QUALITY_0_5_0.valueOf()).toEqual("US Quality Core v0.5.0");
});
