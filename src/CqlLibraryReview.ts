import { ReviewStatus } from "./Review";
import {Comment} from "./Comment";

export interface CqlLibraryReview {
  id: string;
  libraryId: string;
  librarySetId: string;
  status: ReviewStatus;
  comment: Comment[];
  reviewers?: string[];
}
