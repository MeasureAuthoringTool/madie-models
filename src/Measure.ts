

export interface MeasureMetadata {
  steward?: string;
  description?: string;
  copyright?: string;
  disclaimer?: string;
}



export default interface Measure {
  id: string;
  measureHumanReadableId: string;
  measureSetId: string;
  version: number;
  revisionNumber: number;
  state: string;
  measureName: string;
  cqlLibraryName: string;
  cql: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  measureMetaData?: MeasureMetadata;
}
