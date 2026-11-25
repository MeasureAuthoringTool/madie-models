export interface ReadReceipt {
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
  readBy?: ReadReceipt[];
  content?: string;
  link?: string;
  replies?: Comment[];
}
