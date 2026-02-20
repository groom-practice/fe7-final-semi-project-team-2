import { Post, User, Comment } from "@/types/posts";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async ({
  pageParam = 1,
}: {
  pageParam: number;
}): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/posts?_page=${pageParam}&_limit=10`);

  if (!res.ok) {
    throw new Error("포스트 조회 실패");
  }

  return res.json();
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);

  if (!res.ok) {
    throw new Error("포스트 상세 조회 실패");
  }

  return res.json();
};

export const fetchUserById = async (userId: number): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users/${userId}`);

  if (!res.ok) {
    throw new Error("작성자 조회 실패");
  }

  return res.json();
};

export const fetchCommentsByPostId = async (
  postId: number,
): Promise<Comment[]> => {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);

  if (!res.ok) {
    throw new Error("댓글 조회 실패");
  }

  return res.json();
};
