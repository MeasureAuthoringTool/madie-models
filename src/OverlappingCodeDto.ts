export interface OverlappingValueSetDto {
  name: string;
  oid: string;
  url: string;
}

export interface OverlappingCodeDto {
  code: string;
  codeSystem: string;
  description: string;
  codeSystemName: string;
  codeSystemVersion: string;
  valueSets: Array<OverlappingValueSetDto>;
}
