import { CqlLibrary } from "../CqlLibrary";
import { Model } from "../Model";

test("Verifies that Cql Library has the correct attributes", () => {
  const cqlLibrary: CqlLibrary = {
    id: "test",
    cqlLibraryName: "TestingCqlLibrary",
    model: Model.QICORE,
    cqlErrors: false,
    cql: "random string of cql code",
    version: "1",
    draft: false,
    groupId: "",
    createdAt: "",
    createdBy: "",
    lastModifiedAt: "",
    lastModifiedBy: "",
    publisher: "",
    description: "",
    experimental: false,
  };

  expect(cqlLibrary.id).toEqual("test");
  expect(cqlLibrary.cqlLibraryName).toEqual("TestingCqlLibrary");
});
