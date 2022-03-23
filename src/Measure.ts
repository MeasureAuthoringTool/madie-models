import { Model } from "./Model";
import { PopulationType } from "./MeasurePopulation";
import { MeasureScoring } from "./MeasureScoring";



export interface MeasureMetadata {
  steward?: string;
  description?: string;
  copyright?: string;
  disclaimer?: string;
}

export interface Group {
  id: string;
  scoring?: string;
  population?: PopulationType;
}

export default interface Measure {
  id: string;
  measureHumanReadableId: string;
  measureSetId: string;
  version: number;
  revisionNumber: number;
  state: string;
  measureName: string;
  cqlLibraryName: string;
  measureScoring: MeasureScoring | "";
  cql: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  model: Model | "";
  measureMetaData?: MeasureMetadata;
  groups?: Array<Group>;
}
