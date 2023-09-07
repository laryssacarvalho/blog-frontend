export type PostModel = {    
    id: number;
    title: string;
    content: string;
    publishedAt: Date | null;
    comments: CommentModel[];
};
  
export type CommentModel = {
    content: string;
    isRejection: boolean;
};
  