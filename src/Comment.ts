export interface ReadStatus {
  harpId: string;
  readAt: string;
}

export interface Comment {
  id: string;
  mainSection?: string;
  subSection?: string;
  subSectionId?: string;
  createdAt?: string;
  harpId?: string;
  authorName?: string;
  edited?: boolean;
  readBy?: ReadStatus[];
  content?: string;
  link?: string;
  replies?: Comment[];
}
