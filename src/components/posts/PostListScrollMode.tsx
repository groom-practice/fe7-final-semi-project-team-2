import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/api/postsApi";

export default function PostListScrollMode() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

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

  // Intersection Observer 설정
  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );

    observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="space-y-3">
        {data?.pages.map((page) =>
          page.map((post) => (
            <li key={post.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.body}</p>
            </li>
          )),
        )}
      </ul>

      {/* 감지용 div */}
      <div ref={loadMoreRef} className="h-10" />

      {isFetchingNextPage && (
        <p className="text-center text-sm text-muted-foreground">
          데이터 불러오는 중...
        </p>
      )}
    </div>
  );
}
