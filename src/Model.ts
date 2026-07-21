export enum Model {
  FHIR_4_0_1 = "FHIR v4.0.1",
  QICORE = "QI-Core v4.1.1",
  QICORE_6_0_0 = "QI-Core v6.0.0",
  QICORE_7_0_2 = "QI-Core v7.0.2",
  QDM_5_6 = "QDM v5.6",
  US_CORE_6_1_0 = "US-Core v6.1.0-derived",
  US_QUALITY_0_5_0 = "US Quality Core v0.5.0",
}

/**
 * Maps each Model to the shortValue used as a path segment in madie-fhir-service APIs:
 *   GET /fhir/models/{shortName}/resources
 *   POST /fhir/test-cases/{shortName}/execution-bundles
 *
 * Keep this record in sync with ModelType.shortValue in madie-java-models.
 * The Record<Model, string> type enforces exhaustiveness — adding a new Model value
 * without a corresponding entry here will cause a TypeScript compile error.
 */
export const MODEL_SHORT_NAMES: Record<Model, string> = {
  [Model.FHIR_4_0_1]: "fhir4",
  [Model.QICORE]: "qicore",
  [Model.QICORE_6_0_0]: "qicore6",
  [Model.QICORE_7_0_2]: "qicore7",
  [Model.QDM_5_6]: "qdm",
  [Model.US_CORE_6_1_0]: "uscore6",
  [Model.US_QUALITY_0_5_0]: "usqualitycore05",
};

/**
 * Returns the backend API path shortName for a given measure model string.
 * Throws if the model string is not a known Model enum value.
 */
export function getModelShortName(model: string): string {
  const short = MODEL_SHORT_NAMES[model as Model];
  if (!short) throw new Error(`Unknown model: ${model}`);
  return short;
}

/**
 * Returns true for any FHIR-based (non-QDM) model.
 * Use this instead of model.includes("QI-Core") in routing and display logic.
 */
export function isFhirModel(model: string | undefined | null): boolean {
  return Boolean(model) && model !== Model.QDM_5_6;
}
