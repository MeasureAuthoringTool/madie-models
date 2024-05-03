import { Model } from "./Model";
import { Population, PopulationType } from "./Population";
import { TestCase } from "./TestCase";
import { MeasureGroupTypes } from "./MeasureGroupTypes";
import { AggregateFunctionType } from "./AggregateFunctionType";
import { Organization } from "./Organization";
import { BaseConfigurationTypes } from "./BaseConfigurationTypes";

export type Code = {
  name: string;
  display: string;
  version: string;
  codeSystem: string;
  codeSystemOid: string;
  status: string;
}
export type CodeSystemVersion = { 
    name: string;
    display: string;
    version: string;
    codeSystem: string;
    codeSystemOid: string;
    status: string;
}
export type CqlMetaData = {
    codeSystemMap: Map<string, CodeSystemVersion>;
}
export interface MeasureMetadata {
  steward?: Organization;
  developers?: Array<Organization>;
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
  measureSetTitle?: string;
  cqlMetaData?: CqlMetaData;
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
}

export interface MeasureObservation {
  id?: string;
  definition?: string;
  description?: string;
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

export interface SupplementalData {
  definition: string;
  description?: string;
}

export type RiskAdjustment = SupplementalData;

export interface ManifestExpansion {
  fullUrl: string;
  id: string;
}

export interface TestCaseConfiguration {
  id?: string;
  sdeIncluded?: boolean;
  manifestExpansion?: ManifestExpansion;
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
  model: Model | "";
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
}
