export interface PostType {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
}

export interface DataModuleTypes {
  posts: PostType[];
  setPosts: (posts: []) => void;

  blogId: string;
  setBlogId: (blogId: string) => void;
}
