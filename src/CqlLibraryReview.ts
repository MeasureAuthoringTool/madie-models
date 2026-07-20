import { ReviewStatus } from "./Review";

export interface CqlLibraryReview {
  id: string;
  libraryId: string;
  librarySetId: string;
  status: ReviewStatus;
  comment: string;
}
