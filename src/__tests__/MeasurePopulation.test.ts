import {getPopulationCode, MeasurePopulation} from '../MeasurePopulation';

describe("MeasureScoring Model", () => {
  it('Verifies that MeasurePopulation has the correct attributes', () => {
    expect(MeasurePopulation.INITIAL_POPULATION).toEqual('initialPopulation');
  });
  
  it('returns population code for getPopulationCode(MeasurePopulation)', () => {
    expect(getPopulationCode(MeasurePopulation.INITIAL_POPULATION)).toEqual("IPP");
    expect(getPopulationCode(MeasurePopulation.NUMERATOR)).toEqual("NUMER");
    expect(getPopulationCode(MeasurePopulation.NUMERATOR_EXCLUSION)).toEqual("NUMEX");
    expect(getPopulationCode(MeasurePopulation.DENOMINATOR)).toEqual("DENOM");
    expect(getPopulationCode(MeasurePopulation.DENOMINATOR_EXCLUSION)).toEqual("DENEX");
    expect(getPopulationCode(MeasurePopulation.DENOMINATOR_EXCEPTION)).toEqual("DENEXCEP");
    expect(getPopulationCode(MeasurePopulation.MEASURE_POPULATION)).toEqual("MSRPOPL");
    expect(getPopulationCode(MeasurePopulation.MEASURE_POPULATION_EXCLUSION)).toEqual("MSRPOPLEX");
    expect(getPopulationCode(MeasurePopulation.MEASURE_OBSERVATION)).toEqual("OBSERV");
  });
});