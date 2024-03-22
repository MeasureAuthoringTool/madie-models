export interface TestCaseExcelExportDto {
  groupId: string;
  groupNumber: string;
  testCaseExecutionResults: TestCaseExecutionResultDto[];
}

export interface TestCaseExecutionResultDto {
  populations: Array<Population>;
  notes?: string;
  last: string;
  first: string;
  birthdate?: string;
  expired?: string;
  deathdate?: string;
  ethnicity?: string;
  race?: string;
  gender?: string;
  definitions: Array<Definition>;
  functions: Array<Func>;
}

export interface Population {
  name: string;
  expected: number;
  actual: number;
}

export interface Definition {
  logic: string;
  actual: string;
}

export interface Func {
  logic: string;
  actual: string;
}
