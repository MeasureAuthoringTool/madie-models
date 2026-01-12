import { Model } from "./Model";
import { Population, PopulationType } from "./Population";
import { TestCase } from "./TestCase";
import { MeasureGroupTypes } from "./MeasureGroupTypes";
import { AggregateFunctionType } from "./AggregateFunctionType";
import { Organization } from "./Organization";
import { BaseConfigurationTypes } from "./BaseConfigurationTypes";
import IncludedLibrary from "./IncludedLibrary";

export type Code = {
  name: string;
  display: string;
  svsVersion: string;
  fhirVersion: string;
  codeSystem: string;
  codeSystemOid: string;
  codeSystemUrl: string;
  status: string;
  versionIncluded: boolean;
  suffix?: string;
};
export type CodeSystem = {
  name: string;
  display: string;
  svsVersion: string;
  fhirVersion: string;
  codeSystem: string;
  codeSystemOid: string;
  status: string;
};
export type CqlMetaData = {
  codeSystemMap: Map<string, CodeSystem>;
};

export type CodeConcept = {
  code: string;
  codeSystem: string;
  display: string;
  definition: string;
};
export interface MeasureMetadata {
  steward?: Organization;
  developers?: Array<Organization>;
  description?: string;
  copyright?: string;
  disclaimer?: string;
  rationale?: string;
  purpose?: string;
  guidance?: string;
  clinicalRecommendation?: string;
  draft?: boolean;
  references?: Array<Reference>;
  endorsements?: Array<Endorsement>;
  definition?: string;
  experimental?: boolean;
  transmissionFormat?: string;
  measureSetTitle?: string;
  cqlMetaData?: CqlMetaData;
  intendedVenue?: CodeConcept;
  composite?: boolean;
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
  endorserSystemId?: string;
}

export interface EndorsementOrganization {
  id?: string;
  endorserOrganization?: string;
}

export interface Stratification {
  id: string;
  description?: string;
  cqlDefinition?: string;
  association?: PopulationType;
  associations?: PopulationType[];
  displayId?: string;
}

export interface MeasureObservation {
  id?: string;
  definition?: string;
  description?: string;
  criteriaReference?: string;
  aggregateMethod?: AggregateFunctionType;
  displayId?: string;
}

export interface Group {
  id: string;
  scoring?: string;
  populations?: Population[];
  measureObservations?: MeasureObservation[];
  groupDescription?: string;
  rateAggregation?: string;
  improvementNotation?: string;
  improvementNotationDescription?: string;
  scoringUnit?: string;
  stratifications?: Stratification[];
  measureGroupTypes: MeasureGroupTypes[];
  populationBasis?: string;
  scoringPrecision?: string;
  displayId?: string;
  compositeScoring?:string;
}

export interface Acl {
  userId: string;
  roles: Array<string>;
}

export interface MeasureSet {
  id: string;
  cmsId?: number;
  measureSetId: string;
  owner: string;
  acls?: Array<Acl>;
}

export enum MeasureErrorType {
  MISSING_ELM = "MISSING_ELM",
  ERRORS_ELM_JSON = "ERRORS_ELM_JSON",
  MISMATCH_CQL_POPULATION_RETURN_TYPES = "MISMATCH_CQL_POPULATION_RETURN_TYPES",
  MISMATCH_CQL_RISK_ADJUSTMENT = "MISMATCH_CQL_RISK_ADJUSTMENT",
  MISMATCH_CQL_SUPPLEMENTAL_DATA = "MISMATCH_CQL_SUPPLEMENTAL_DATA",
}

export enum MeasureReportType {
  INDIVIDUAL = "Individual",
  SUBJECT_LIST = "Subject List",
  SUMMARY = "Summary",
  DATA_COLLECTION = "Data Collection",
}

export interface SupplementalData {
  definition: string;
  description?: string;
  includeInReportType?: MeasureReportType[];
}

export type RiskAdjustment = SupplementalData;

export interface ManifestExpansion {
  fullUrl: string;
  id: string;
  title?: string;
}

export interface TestCaseConfiguration {
  id?: string;
  sdeIncluded?: boolean;
  ravIncluded?: boolean;
  manifestExpansion?: ManifestExpansion;
  executeInvalidTestCases?: boolean;
}

export interface MeasureDefinition {
  id: string;
  term: string;
  definition: string;
}

export interface MeasureLock {
  id: string;
  measureId: string;
  lockedBy: string;
  lockedAt: string;
}

export interface Measure {
  id: string;
  versionId: string;
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
  model: Model;
  measureMetaData?: MeasureMetadata;
  measurementPeriodStart: Date;
  measurementPeriodEnd: Date;
  groups?: Array<Group>;
  elmJson?: string;
  testCases?: Array<TestCase>;
  acls?: Array<Acl>;
  supplementalData?: Array<SupplementalData>;
  supplementalDataDescription?: string;
  riskAdjustments?: Array<RiskAdjustment>;
  riskAdjustmentDescription?: string;
  scoring?: string;
  baseConfigurationTypes: BaseConfigurationTypes[];
  patientBasis?: boolean;
  rateAggregation?: string;
  measureSet?: MeasureSet;
  improvementNotation?: string;
  improvementNotationDescription?: string;
  testCaseConfiguration?: TestCaseConfiguration;
  includedLibraries?: Array<IncludedLibrary>;
  measureDefinitions?: Array<MeasureDefinition>;
  measureLock?: MeasureLock;
  hasLockedTestCases?: boolean;
}
