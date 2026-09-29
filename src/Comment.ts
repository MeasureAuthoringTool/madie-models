export interface Comment {
    id: string;
    mainSection?: string;
    subSection?: string;
    createdAt?: string;
    authorName?: string;
    edited?: boolean;
    readByUsers?: string[];
    content?: string;
    link?: string;
    replies?: Comment[];
}
