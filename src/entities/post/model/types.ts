export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface Post {
  id: string;
  title: string;
  postText: string;
  comments?: Comment[];
}