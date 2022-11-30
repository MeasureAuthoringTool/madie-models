import { PopulationType } from "../Population";

describe("MeasureScoring Model", () => {
  it("Verifies that MeasurePopulation has the correct attributes", () => {
    expect(PopulationType.INITIAL_POPULATION).toEqual("initialPopulation");
    expect(PopulationType.DENOMINATOR).toEqual("denominator");
    expect(PopulationType.DENOMINATOR_EXCLUSION).toEqual(
      "denominatorExclusion"
    );
    expect(PopulationType.DENOMINATOR_EXCEPTION).toEqual(
      "denominatorException"
    );
    expect(PopulationType.NUMERATOR).toEqual("numerator");
    expect(PopulationType.NUMERATOR_EXCLUSION).toEqual("numeratorExclusion");
    expect(PopulationType.MEASURE_POPULATION).toEqual("measurePopulation");
    expect(PopulationType.DENOMINATOR_OBSERVATION).toEqual(
      "denominatorObservation"
    );
    expect(PopulationType.NUMERATOR_OBSERVATION).toEqual(
      "numeratorObservation"
    );
  });
});
