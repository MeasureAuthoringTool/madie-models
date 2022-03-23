export enum MeasureScoring {
  COHORT = "Cohort",
  CONTINUOUS_VARIABLE = "Continuous Variable",
  PROPORTION = "Proportion",
  RATIO = "Ratio",
}

export type MeasureScoringKeys = keyof typeof MeasureScoring;

/*
Leaving this here because I don't completely understand what it was for and whether it's needed 

Joe Said:

  Joe Kotanchik:taco:  12:29 PM
  I wanted the scoring fields to be backed by enum, by js doesn't support an enum type.

  TS does but results in that mess to prevent data loss during compilation.

  It's probably cleaner to create a class that functions like an enum.
  12:30
  That's my memory at least.

  Oh, I think the map was to provide a way to use the display value to get its matching enum constant.
 */
export const MEASURE_SCORING_KEYS = new Map<MeasureScoring, MeasureScoringKeys>(
  // Object.entries(MeasureScoring).map(
  //   ([k, v]) => [v, k]
  // )
);
