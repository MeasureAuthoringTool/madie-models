import { HapiOperationOutcome, TestCase, ValidationStatus } from "../TestCase";

describe("TestCase Model", () => {
  it("should be able to create test case and populate fields", () => {
    const testCase = {
      id: "abc-pqr",
      title: "Test Case001",
      description: "TDescription about this testcase",
      name: "Test Case001",
      series: "IPP_Pass",
      createdAt: "01/01/2022",
      createdBy: "JohnDoe",
      lastModifiedAt: "01/02/2022",
      lastModifiedBy: "JohnDoe",
      json: "{}",
      executionStatus: "FAIL",
      groupPopulations: [],
      validResource: false,
      hapiOperationOutcome: {} as HapiOperationOutcome,
      validationStatus: ValidationStatus.VALID,
      patientId: "test patient id",
    } as TestCase;

    expect(testCase.id).toEqual("abc-pqr");
    expect(testCase.title).toEqual("Test Case001");
    expect(testCase.series).toEqual("IPP_Pass");
  });
});
