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

export function getPopulationCode(populationType: PopulationType): string {
  if (PopulationCodeMap[populationType] == undefined)
  {
    return populationType;
  }
  else {
    return PopulationCodeMap[populationType]
  }
}


export interface Population {
  id?: string;
  name: PopulationType ;
  definition?: string;
  associationType?: string;
  description?:string;
}
