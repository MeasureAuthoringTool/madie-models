import { getPopulationCode, PopulationType } from "../Population";

describe("MeasureScoring Model", () => {
  it("Verifies that MeasurePopulation has the correct attributes", () => {
    expect(PopulationType.INITIAL_POPULATION).toEqual("initialPopulation");
  });

  it("returns population code for getPopulationCode(PopulationType)", () => {
    expect(getPopulationCode(PopulationType.INITIAL_POPULATION)).toEqual(
      "IPP"
    );
    expect(getPopulationCode(PopulationType.NUMERATOR)).toEqual("NUMER");
    expect(getPopulationCode(PopulationType.NUMERATOR_EXCLUSION)).toEqual(
      "NUMEX"
    );
    expect(getPopulationCode(PopulationType.DENOMINATOR)).toEqual("DENOM");
    expect(getPopulationCode(PopulationType.DENOMINATOR_EXCLUSION)).toEqual(
      "DENEX"
    );
    expect(getPopulationCode(PopulationType.DENOMINATOR_EXCEPTION)).toEqual(
      "DENEXCEP"
    );
    expect(getPopulationCode(PopulationType.MEASURE_POPULATION)).toEqual(
      "MSRPOPL"
    );
    expect(
      getPopulationCode(PopulationType.MEASURE_POPULATION_EXCLUSION)
    ).toEqual("MSRPOPLEX");
    expect(getPopulationCode(PopulationType.MEASURE_OBSERVATION)).toEqual(
      "OBSERV"
    );
  });
});
