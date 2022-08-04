import { Model } from "./Model";
import {Population, PopulationType} from "./Population";
import { TestCase } from "./TestCase";
import { MeasureGroupTypes } from "./MeasureGroupTypes";

export interface MeasureMetadata {
  steward?: string;
  description?: string;
  copyright?: string;
  disclaimer?: string;
  rationale?: string;
  author?: string;
  guidance?: string;
}
export interface Stratification {
  id:string;
  description?:string;
  cqlDefinition?:string;
  association?:string;
}

export interface MeasureObservation {
  id?: string;
  name: PopulationType;
  definition?: string;
  criteriaReference?: string;
  aggregateMethod?: string;
}

export interface Group {
  id: string;
  scoring?: string;
  populations?: Population[];
  measureObservations?: MeasureObservation[];
  groupDescription?: string;
  rateAggregation?:string;
  improvementNotation?:string;
  scoringUnit?:string;
  stratifications?: Stratification[];
  measureGroupTypes: MeasureGroupTypes[];
  populationBasis?: string;
}

export interface Measure {
  id: string;
  active: boolean;
  measureHumanReadableId: string;
  measureSetId: string;
  version: number;
  revisionNumber: number;
  state: string;
  measureName: string;
  cqlLibraryName: string;
  cqlErrors?: boolean;
  cql: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  model: Model | "";
  measureMetaData?: MeasureMetadata;
  measurementPeriodStart: Date;
  measurementPeriodEnd: Date;
  groups?: Array<Group>;
  elmJson?: string;
  testCases?: Array<TestCase>
}
