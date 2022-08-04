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
}

const PopulationCodeMap = {
  initialPopulation: "IPP",
  numerator: "NUMER",
  numeratorExclusion: "NUMEX",
  denominator: "DENOM",
  denominatorExclusion: "DENEX",
  denominatorException: "DENEXCEP",
  measurePopulation: "MSRPOPL",
  measurePopulationExclusion: "MSRPOPLEX",
  measureObservation: "OBSERV",
};

export function getPopulationCode(
  populationType: PopulationType
): string {
  return PopulationCodeMap[populationType];
}

export enum ExtensionType {
  CRITERIA_REFERENCE,
  AGGREGATE_METHOD,
}

export interface Extension {
  type: ExtensionType;
  value: string;
}

export interface Population {
  id?: string;
  name: PopulationType;
  definition?: string;
  extensions?: Extension[];
}

export interface MeasureObservation {
  id?: string;
  name: PopulationType;
  definition?: string;
  criteriaReference?: string;
  aggregateMethod?: string;
}

// export interface Population {
//   id?: string;
//   name: PopulationType;
//   definition?: string;
//   criteriaReference?: string;
// }
//
// export interface MeasureObservation extends Population {
//   aggregateMethod?: string;
// }


//
//
// export interface Population {
//   id?: string;
//   name: PopulationType;
//   definition?: string;
//   criteriaReference?: string;
//   aggregateMethod?: string;
// }




