import { Model } from "./Model";
import { Population, PopulationType } from "./Population";
import { TestCase } from "./TestCase";
import { MeasureGroupTypes } from "./MeasureGroupTypes";
import { AggregateFunctionType } from "./AggregateFunctionType";

export interface MeasureMetadata {
  steward?: string;
  developers?: string[];
  description?: string;
  copyright?: string;
  disclaimer?: string;
  rationale?: string;
  guidance?: string;
  clinicalRecommendation?: string;
  draft?: boolean;
  references?: Array<Reference>;
  endorsements?: Array<Endorsement>;
  riskAdjustment?: string;
  definition?: string;
  experimental?: boolean;
  transmissionFormat?: string;
  supplementalDataElements?: string;
}

export interface Reference {
  id?: string;
  referenceText?: string;
  referenceType?: string;
}

export interface Endorsement {
  id?: string;
  endorser?: string;
  endorsementId?: string;
}

export interface Stratification {
  id: string;
  description?: string;
  cqlDefinition?: string;
  association?: PopulationType;
}

export interface MeasureObservation {
  id?: string;
  definition?: string;
  criteriaReference?: string;
  aggregateMethod?: AggregateFunctionType;
}

export interface Group {
  id: string;
  scoring?: string;
  populations?: Population[];
  measureObservations?: MeasureObservation[];
  groupDescription?: string;
  rateAggregation?: string;
  improvementNotation?: string;
  scoringUnit?: string;
  stratifications?: Stratification[];
  measureGroupTypes: MeasureGroupTypes[];
  populationBasis?: string;
}

export interface Acl {
  userId: string;
  roles: Array<string>;
}

export enum MeasureErrorType {
  MISSING_ELM = "MISSING_ELM",
  ERRORS_ELM_JSON = "ERRORS_ELM_JSON",
  MISMATCH_CQL_POPULATION_RETURN_TYPES = "MISMATCH_CQL_POPULATION_RETURN_TYPES",
  MISMATCH_CQL_RISK_ADJUSTMENT = "MISMATCH_CQL_RISK_ADJUSTMENT",
  MISMATCH_CQL_SUPPLEMENTAL_DATA = "MISMATCH_CQL_SUPPLEMENTAL_DATA",
}

export interface SupplementalData {
  definition: string;
  description?: string;
}

export interface RiskAdjustment extends SupplementalData {}

export interface Measure {
  id: string;
  versionId: string;
  cmsId?: string;
  active: boolean;
  measureHumanReadableId: string;
  measureSetId: string;
  version: string;
  state: string;
  measureName: string;
  cqlLibraryName: string;
  ecqmTitle: string;
  cqlErrors?: boolean;
  errors?: MeasureErrorType[];
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
  testCases?: Array<TestCase>;
  acls?: Array<Acl>;
  supplementalData?: Array<SupplementalData>;
  riskAdjustment?: Array<RiskAdjustment>;
}
