import { Model } from "./Model";
import { LibrarySet, CqlLibraryLock } from "./CqlLibrary";

export interface LibraryListDTO {
  id: string;
  librarySetId: string;
  cqlLibraryName: string;
  createdAt?: string;
  ownerDisplayName?: string;
  model: Model | "";
  version: string;
  librarySet?: LibrarySet;
  lastModifiedAt: string;
  draft: boolean;
  hasAssociatedLibraries: boolean;
  reviewStatus?: string;
  reviewers?: string[];
  cqlLibraryLock?: CqlLibraryLock;
}
