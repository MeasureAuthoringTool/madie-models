export enum AggregateFunctionType {
  AVERAGE = "Average",
  COUNT = "Count",
  MAXIMUM = "Maximum",
  MEDIAN = "Median",
  MINIMUM = "Minimum",
  SUM = "Sum",
}

export type AggregateFunctionKeys = keyof typeof AggregateFunctionType;

export const AGGREGATE_FUNCTION_KEYS = new Map(
  Object.entries(AggregateFunctionType).map(([k, v]) => [
    v,
    k as AggregateFunctionKeys,
  ])
);
