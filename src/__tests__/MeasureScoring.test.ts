import { MeasureScoring, MEASURE_SCORING_KEYS } from '../MeasureScoring';

describe("MeasureScoring Model", () => {
  it('Verifies MeasureScoring enum has the correct enum constants', () => {
    expect(MeasureScoring.COHORT.valueOf()).toEqual('Cohort');
    expect(MeasureScoring.CONTINUOUS_VARIABLE.valueOf()).toEqual("Continuous Variable");
    expect(MeasureScoring.PROPORTION.valueOf()).toEqual("Proportion");
    expect(MeasureScoring.RATIO.valueOf()).toEqual("Ratio");
  });
  
  it('Verifies MEASURE_SCORING_KEYS contains keys/values from MeasureScoring', () => {
    for (const [value, key] of MEASURE_SCORING_KEYS) {
      expect(MeasureScoring[key]).toEqual(value);
    }
  });
});