import { Post } from "@/types/posts";

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
