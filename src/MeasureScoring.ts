export enum MeasureScoring {
  COHORT = "Cohort",
  CONTINUOUS_VARIABLE = "Continuous Variable",
  PROPORTION = "Proportion",
  RATIO = "Ratio",
}

export type MeasureScoringKeys = keyof typeof MeasureScoring;

export const MEASURE_SCORING_KEYS = new Map(
  Object.entries(MeasureScoring).map(
    ([k, v]) => [v, k as MeasureScoringKeys]
  )
);
