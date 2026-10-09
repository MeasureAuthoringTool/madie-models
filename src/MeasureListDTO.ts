import { Model } from "./Model";
import { Group, MeasureLock, MeasureMetadata, MeasureSet } from "./Measure";

export interface MeasureListDTO {
  id: string;
  measureSetId: string;
  measureName: string;
  version: string;
  model: Model;
  measureSet?: MeasureSet;
  groups?: Array<Group>;
  active: boolean;
  ecqmTitle: string;
  lastModifiedAt: string;
  measureMetaData?: MeasureMetadata;
  hasAssociatedMeasures: boolean;
  measureLock?: MeasureLock;
  hasLockedTestCases: boolean;
  ownerDisplayName?: string;
  component: boolean;
  reviewStatus?: string;
  reviewers?: string[];
  translatorVersion?: string;
}
