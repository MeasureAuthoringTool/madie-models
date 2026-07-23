import {
  Model,
  MODEL_SHORT_NAMES,
  getModelShortName,
  isFhirModel,
  getModelFamily,
} from "../Model";

test("Verifies that Model has the correct attributes", () => {
  expect(Model.QICORE.valueOf()).toEqual("QI-Core v4.1.1");
  expect(Model.QICORE_6_0_0.valueOf()).toEqual("QI-Core v6.0.0");
  expect(Model.QICORE_7_0_2.valueOf()).toEqual("QI-Core v7.0.2");
  expect(Model.QDM_5_6.valueOf()).toEqual("QDM v5.6");
  expect(Model.US_QUALITY_0_5_0.valueOf()).toEqual("US Quality Core v0.5.0");
});

test("MODEL_SHORT_NAMES covers every Model value", () => {
  Object.values(Model).forEach((m) => {
    expect(MODEL_SHORT_NAMES[m]).toBeTruthy();
  });
});

test("getModelShortName returns correct shortNames", () => {
  expect(getModelShortName(Model.FHIR_4_0_1)).toBe("fhir4");
  expect(getModelShortName(Model.QICORE)).toBe("qicore");
  expect(getModelShortName(Model.QICORE_6_0_0)).toBe("qicore6");
  expect(getModelShortName(Model.QICORE_7_0_2)).toBe("qicore7");
  expect(getModelShortName(Model.QDM_5_6)).toBe("qdm");
  expect(getModelShortName(Model.US_CORE_6_1_0)).toBe("uscore6");
  expect(getModelShortName(Model.US_QUALITY_0_5_0)).toBe("usqualitycore05");
});

test("getModelShortName throws for an unknown model string", () => {
  expect(() => getModelShortName("Unknown Model v1.0")).toThrow(
    "Unknown model"
  );
});

test("isFhirModel returns true for all non-QDM models", () => {
  expect(isFhirModel(Model.FHIR_4_0_1)).toBe(true);
  expect(isFhirModel(Model.QICORE)).toBe(true);
  expect(isFhirModel(Model.QICORE_6_0_0)).toBe(true);
  expect(isFhirModel(Model.QICORE_7_0_2)).toBe(true);
  expect(isFhirModel(Model.US_CORE_6_1_0)).toBe(true);
  expect(isFhirModel(Model.US_QUALITY_0_5_0)).toBe(true);
});

test("isFhirModel returns false for QDM and empty/falsy values", () => {
  expect(isFhirModel(Model.QDM_5_6)).toBe(false);
  expect(isFhirModel("")).toBe(false);
  expect(isFhirModel(undefined)).toBe(false);
});

test("getModelFamily returns FHIR for QI-Core models", () => {
  expect(getModelFamily(Model.QICORE)).toBe("FHIR");
  expect(getModelFamily(Model.QICORE_6_0_0)).toBe("FHIR");
  expect(getModelFamily("QI-Core v5.0.000")).toBe("FHIR");
});

test("getModelFamily returns the first word of the model name otherwise", () => {
  expect(getModelFamily(Model.QDM_5_6)).toBe("QDM");
  expect(getModelFamily("QDM v4.0.000")).toBe("QDM");
  // Note: intentionally NOT the same as isFhirModel — US Quality Core is
  // FHIR-based but its export artifact family is the first word, "US".
  expect(getModelFamily(Model.US_QUALITY_0_5_0)).toBe("US");
});

test("getModelFamily returns undefined for empty model", () => {
  expect(getModelFamily("")).toBeUndefined();
});
