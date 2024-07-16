export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  createdTime: string;
}

export interface SingleBlogPost extends BlogPost {
  content: string;
}
