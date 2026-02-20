import { Button } from "../ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/api/postsApi";

export default function PostListButtonMode() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length === 10 ? nextPage : undefined;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="space-y-3 mb-4">
        {data?.pages.map((page) =>
          page.map((post) => (
            <li key={post.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.body}</p>
            </li>
          )),
        )}
      </ul>

      {hasNextPage && (
        <div>
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "데이터 불러오는 중..." : "더보기"}
          </Button>
        </div>
      )}
    </div>
  );
}
