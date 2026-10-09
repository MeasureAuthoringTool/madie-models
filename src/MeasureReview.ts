import { ReviewStatus } from "./Review";
import { Comment } from "./Comment";

export interface MeasureReview {
  id: string;
  measureId: string;
  measureSetId: string;
  status: ReviewStatus;
  comment: Comment[];
  reviewers?: string[];
  readyForReviewBy?: string;
  readyForReviewAt?: string;
}
