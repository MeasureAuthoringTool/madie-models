export enum ReviewStatus {
  READY_FOR_REVIEW = "READY_FOR_REVIEW",
  NOT_READY_FOR_REVIEW = "NOT_READY_FOR_REVIEW",
}

export interface Review {
  status: ReviewStatus;
  comment?: string;
}

