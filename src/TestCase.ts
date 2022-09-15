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
  hapiOperationOutcome: HapiOperationOutcome;
}

export interface GroupPopulation {
  groupId: string;
  scoring: string;
  populationBasis: string;
  populationValues: PopulationExpectedValue[];
}

export interface PopulationExpectedValue {
  name: PopulationType;
  expected: any;
}

export interface DisplayGroupPopulation {
  groupId: string;
  scoring: string;
  populationValues: DisplayPopulationValue[];
  populationBasis: string;
}

export interface DisplayPopulationValue {
  name: PopulationType;
  expected: any;
  actual: any;
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
