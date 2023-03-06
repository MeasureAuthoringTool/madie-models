import { Model } from "./Model";
import {ProgramUseContext} from "./ProgramUseContext";

export interface CqlLibrary {
  id: string;
  cqlLibraryName: string;
  model: Model | "";
  cqlErrors: boolean;
  cql: string;
  version: string;
  draft: boolean;
  groupId: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  publisher?: string;
  description?: string;
  experimental?: boolean;
  programUseContext?: ProgramUseContext;
}
