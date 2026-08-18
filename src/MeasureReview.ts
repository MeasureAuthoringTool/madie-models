import { ReviewStatus } from "./Review";

export interface MeasureReview {
  id: string;
  measureId: string;
  measureSetId: string;
  status: ReviewStatus;
  comment: string;
  reviewers?: string[];
}
