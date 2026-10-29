import { ReviewStatus } from "./Review";
import { Comment } from "./Comment";

export interface CqlLibraryReview {
  id: string;
  libraryId: string;
  librarySetId: string;
  status: ReviewStatus;
  comments: Comment[];
  reviewers?: string[];
  markedForReviewBy?: string;
  markedForReviewAt?: string;
}
