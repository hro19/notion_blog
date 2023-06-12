export type Post = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  slug: string;
  thumbnail: string;
};

export type PostsProps = {
  allPosts: Post[];
  allTags: string[];
};