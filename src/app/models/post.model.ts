import { PostStatus } from "../enums/post-status.enum";

export type PostModel = {    
    id: number;
    title: string;
    content: string;
    publishedAt: Date | null;
    comments: CommentModel[];
    status: PostStatus
    authorId: number;
};
  
export type CommentModel = {
    content: string;
    isRejection: boolean;
};
  