export enum PopulationType {
  INITIAL_POPULATION = "initialPopulation",
  NUMERATOR = "numerator",
  NUMERATOR_EXCLUSION = "numeratorExclusion",
  DENOMINATOR = "denominator",
  DENOMINATOR_EXCLUSION = "denominatorExclusion",
  DENOMINATOR_EXCEPTION = "denominatorException",
  MEASURE_POPULATION = "measurePopulation",
  MEASURE_POPULATION_EXCLUSION = "measurePopulationExclusion",
  MEASURE_OBSERVATION = "measureObservation",
  DENOMINATOR_OBSERVATION = "denominatorObservation",
  NUMERATOR_OBSERVATION = "numeratorObservation",
  MEASURE_POPULATION_OBSERVATION = "measurePopulationObservation"
}

export interface Population {
  id?: string;
  name: PopulationType;
  definition?: string;
  associationType?: string;
  description?: string;
}
