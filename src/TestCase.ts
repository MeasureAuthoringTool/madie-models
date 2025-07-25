import { PopulationType } from "./Population";

export interface TestCase {
  id: string;
  title: string;
  description: string;
  name: string;
  series: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  json?: string;
  executionStatus: string;
  groupPopulations: GroupPopulation[];
  validResource: boolean;
  hapiOperationOutcome: HapiOperationOutcome;
  validationStatus: ValidationStatus;
  patientId: string;
  caseNumber?: number;
}

export interface GroupPopulation {
  groupId: string;
  scoring: string;
  populationBasis: string;
  populationValues: PopulationExpectedValue[];
  stratificationValues: StratificationExpectedValue[];
}

export interface PopulationExpectedValue {
  id: string;
  criteriaReference?: string;
  name: PopulationType;
  expected: boolean | number;
  actual?: boolean | number;
}

export interface StratificationExpectedValue {
  id: string;
  criteriaReference?: string;
  name: string;
  expected: boolean | number;
  actual?: boolean | number;
  populationValues?: PopulationExpectedValue[];
}

export interface DisplayGroupPopulation {
  groupId: string;
  scoring: string;
  populationBasis: string;
  populationValues: DisplayPopulationValue[];
  stratificationValues: DisplayStratificationValue[];
}

export interface DisplayPopulationValue {
  name: PopulationType;
  actual?: boolean | number;
  id: string;
  criteriaReference?: string;
  expected: boolean | number;
}

export interface DisplayStratificationValue {
  name: string;
  actual?: boolean | number;
  id: string;
  criteriaReference?: string;
  expected: boolean | number;
  populationValues?: DisplayPopulationValue[];
}

export interface HapiOperationOutcome {
  code: number;
  successful: boolean;
  message: string;
  outcomeResponse: HapiOutcomeResponse;
}

export interface HapiOutcomeResponse {
  resourceType: string;
  text: string;
  issue: HapiIssue[];
}

export interface HapiIssue {
  severity: string;
  code: string;
  diagnostics: string;
  location: string[];
}

export interface TestCaseImportRequest {
  patientId: string;
  json: string;
  testCaseMetaData: TestCaseExportMetaData;
}

export interface TestCaseExportMetaData {
  testCaseId: string;
  patientId: string;
  title: string;
  series?: string;
  description?: string;
}

export interface TestCaseImportOutcome {
  familyName?: string;
  givenNames?: Array<string>;
  patientId: string;
  message: string;
  successful: boolean;
}

export enum ValidationStatus {
  PENDING = "Pending",
  VALIDATING = "Validating",
  VALID = "Valid",
  INVALID = "Invalid",
  INVALID_JSON = "Invalid JSON",
  NOT_COMPLETE = "Not Complete",
}
