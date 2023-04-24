import { Measure } from "../Measure";
import { Model } from "../Model";
import { TestCase } from "../TestCase";

test("Verifies that Measure has the correct attributes", () => {
  const testCase = {
    title: "DialysisBeforeEncounter",
    series: "DENEXPass",
  } as TestCase;

  const measure: Measure = {
    id: "test",
    versionId: "testVersionId",
    cmsId: "testCmsId",
    active: true,
    measureHumanReadableId: "testReadable",
    measureSetId: "1",
    version: "1",
    state: "draft",
    measureName: "TestMeasure",
    cqlLibraryName: "TestMeasureLibrary",
    ecqmTitle: "ecqmTitle",
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
    testCases: [testCase],
    baseConfigurationTypes: [],
  };

  expect(measure.id).toEqual("test");
  expect(measure.cqlErrors).toBeTruthy();
  expect(measure.testCases?.length).toEqual(1);
  if (measure.testCases) {
    expect(measure.testCases[0].title).toEqual(testCase.title);
    expect(measure.testCases[0].series).toEqual(testCase.series);
  }
});
