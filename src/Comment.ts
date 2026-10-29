export interface Comment {
  id: string;
  mainSection?: string;
  subSection?: string;
  subSectionId?: string;
  createdAt?: string;
  harpId?: string;
  authorName?: string;
  edited?: boolean;
  readByUsers?: string[];
  content?: string;
  link?: string;
  replies?: Comment[];
}
