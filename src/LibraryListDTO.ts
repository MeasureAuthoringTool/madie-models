import { Model } from "./Model";
import { LibrarySet, CqlLibraryLock } from "./CqlLibrary";

/**
 * Mirrors the backend LibraryListDTO used by library list endpoints (e.g. the
 * reviewer-only "All Reviews" listing). It is a lightweight projection of a
 * CqlLibrary tailored for table rendering. Note: the backend serializes
 * `version` to a string, so it is a string here (not a structured Version).
 */
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
  cqlLibraryLock?: CqlLibraryLock;
}

