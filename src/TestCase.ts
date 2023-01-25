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
}

export interface DisplayGroupPopulation {
  groupId: string;
  scoring: string;
  populationBasis: string;
  populationValues: DisplayPopulationValue[];
  stratificationValues: DisplayPopulationValue[];
}

export interface DisplayPopulationValue {
  name: PopulationType | string;
  actual?: boolean | number;
  id: string;
  criteriaReference?: string;
  expected: boolean | number;
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
