import { ReviewStatus } from "./Review";
import { Comment } from "./Comment";

export interface MeasureReview {
  id: string;
  measureId: string;
  measureSetId: string;
  status: ReviewStatus;
  comments: Comment[];
  reviewers?: string[];
  markedForReviewBy?: string;
  markedForReviewAt?: string;
}
