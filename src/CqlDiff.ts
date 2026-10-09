export interface CqlFileComparisonDTO {
  oldFileName: string;
  newFileName: string;
  oldText: string;
  newText: string;
}

export interface CqlDiffResultDTO {
  comparisons: CqlFileComparisonDTO[];
  oldMeasureId: string;
  newMeasureId: string;
}
