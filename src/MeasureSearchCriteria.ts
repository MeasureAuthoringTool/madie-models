export interface MeasureSearchCriteria {
  searchField?: string;
  optionalSearchProperties?: string[]; // can be ["measureName", "version", "cmsId"] ..etc
  model?: string;
  draft?: boolean;
  excludeByMeasureIds?: string[];
  fromCompositeMeasureComponent?: boolean;
  allowedScoringTypes?: string[];
}
