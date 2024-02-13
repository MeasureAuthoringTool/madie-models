import { CqlLibrary } from "../CqlLibrary";
import { Model } from "../Model";

test("Verifies that Cql Library has the correct attributes", () => {
  const cqlLibrary: CqlLibrary = {
    id: "test",
    librarySetId: "1",
    cqlLibraryName: "TestingCqlLibrary",
    model: Model.QICORE,
    cqlErrors: false,
    cql: "random string of cql code",
    version: "1",
    draft: false,
    createdAt: "",
    createdBy: "",
    lastModifiedAt: "",
    lastModifiedBy: "",
    publisher: "",
    description: "",
    experimental: false,
    librarySet: {
      id: "2",
      librarySetId: "1",
      owner: "",
      acls: [],
    },
  };

  expect(cqlLibrary.id).toEqual("test");
  expect(cqlLibrary.librarySetId).toEqual("1");
  expect(cqlLibrary.librarySet?.librarySetId).toEqual("1");
  expect(cqlLibrary.cqlLibraryName).toEqual("TestingCqlLibrary");
});
