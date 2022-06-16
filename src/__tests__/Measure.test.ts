import { Measure } from "../Measure";
import { Model } from "../Model";
import {TestCase} from "../TestCase";

test("Verifies that Measure has the correct attributes", () => {
  const testCase = {
    title: "DialysisBeforeEncounter",
    series: "DENEXPass",
  } as TestCase;
  
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
    testCases: [testCase]
  };

  expect(measure.id).toEqual("test");
  expect(measure.cqlErrors).toBeTruthy();
  expect(measure.testCases?.length).toEqual(1);
  if (measure.testCases) {
    expect(measure.testCases[0].title).toEqual(testCase.title);
    expect(measure.testCases[0].series).toEqual(testCase.series);
  }
});
