export interface TestCaseExcelExportDto {
  groupId: string;
  groupNumber: string;
  testCaseExecutionResults: TestCaseExecutionResultDto[];
}

export interface TestCaseExecutionResultDto {
  populations: Array<PopulationDto>;
  notes?: string;
  last: string;
  first: string;
  birthdate?: string;
  expired?: string;
  deathdate?: string;
  ethnicity?: string;
  race?: string;
  gender?: string;
  definitions: Array<DefinitionDto>;
  functions: Array<FunctionDto>;
}

export interface PopulationDto {
  name: string;
  expected: number;
  actual: number;
}

export interface DefinitionDto {
  logic: string;
  actual: string;
}

export interface FunctionDto {
  logic: string;
  actual: string;
}
