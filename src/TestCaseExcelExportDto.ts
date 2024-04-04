export interface TestCaseExcelExportDto {
  groupId: string;
  groupNumber: string;
  testCaseExecutionResults: TestCaseExecutionResultDto[];
}

export interface TestCaseExecutionResultDto {
  testCaseId: string;
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
  stratifications?: Array<GroupedStratificationDto>;
}

export interface PopulationDto {
  name: string;
  expected: number;
  actual: number;
  pass: boolean;
}

export interface DefinitionDto {
  logic: string;
  actual: string;
}

export interface FunctionDto {
  logic: string;
  actual: string;
}

export interface StratificationDto {
  id: string;
  name: string;
  expected: number;
  actual: number;
  pass: boolean;
}

export interface GroupedStratificationDto {
  testCaseId: string;
  stratId: string;
  stratName: string;
  stratificationDtos: StratificationDto[];
}
