export enum AggregateFunctionType {
AVERAGE = "Average",
COUNT = "Count",
MAXIMUM = "Maximum",
MEDIAN = "Median",
MINIMUM = "Minimum",
MODE = "Mode",
POPULATION_STANDARD_DEVIATION = "Population Standard Deviation",
POPULATION_VARIANCE = "Population Variance",
SAMPLE_STANDARD_DEVIATION = "Sample Standard Deviation",
SAMPLE_VARIANCE = "Sample Variance",
SUM = "Sum",
}

export type AggregateFunctionKeys = keyof typeof AggregateFunctionType;

export const AGGREGATE_FUNCTION_KEYS = new Map(
  Object.entries(AggregateFunctionType).map(([k, v]) => [v, k as AggregateFunctionKeys])
);
