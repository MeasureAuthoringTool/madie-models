export interface DiffItem {
  field: string;
  oldValue: string;
  newValue: string;
}

export interface HtmlDiffResponse {
  oldHtml: string;
  newHtml: string;
  differences: DiffItem[];
}
