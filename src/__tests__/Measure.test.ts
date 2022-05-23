import { Measure } from "../Measure";
import { MeasureScoring } from "../MeasureScoring";
import { Model } from "../Model";

test("Verifies that Measure has the correct attributes", () => {
  const measure: Measure = {
    id: "test",
    active: true,
    measureHumanReadableId: "testReadable",
    measureSetId: "1",
    version: 1,
    revisionNumber: 2,
    state: "draft",
    measureName: "TestMeasure",
    cqlLibraryName: "TestMeasureLibrary",
    measureScoring: MeasureScoring.COHORT,
    cql: "random string of cql code",
    cqlErrors: true,
    createdAt: "",
    createdBy: "",
    lastModifiedAt: "",
    lastModifiedBy: "",
    model: Model.QICORE,
    measureMetaData: {},
    measurementPeriodEnd: new Date("01/01/2022"),
    measurementPeriodStart: new Date("12/31/2022"),
  };

  expect(measure.id).toEqual("test");
  expect(measure.cqlErrors).toBeTruthy();
});
