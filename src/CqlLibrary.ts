import { Model } from "./Model";
import { Acl } from "./Measure";

export interface LibrarySet {
  id: string;
  librarySetId: string;
  owner: string;
  acls?: Array<Acl>;
}

export interface CqlLibrary {
  id: string;
  cqlLibraryName: string;
  librarySetId: string;
  model: Model | "";
  cqlErrors: boolean;
  cql: string;
  version: string;
  draft: boolean;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  publisher?: string;
  description?: string;
  experimental?: boolean;
  librarySet?: LibrarySet;
}
