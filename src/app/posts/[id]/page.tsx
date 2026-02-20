"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  fetchCommentsByPostId,
  fetchPostById,
  fetchUserById,
} from "@/api/postsApi";

export default function PostDetailPage() {
  const { id } = useParams();
  const postId = Number(id);

  // 게시글 조회
  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
    error: postError,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
  });

  // 작성자 조회
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery({
    queryKey: ["user", post?.userId],
    queryFn: () => fetchUserById(post!.userId),
    enabled: !!post?.userId,
  });

  // 댓글 조회
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchCommentsByPostId(postId),
  });

  if (isPostLoading) return <p>Loading...</p>;
  if (isPostError) return <p>Error: {postError.message}</p>;

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div className="flex flex-col gap-6 rounded-xl border p-6">
        <div>
          <h1 className="text-2xl font-bold">{post?.title}</h1>
          <p className="mt-4 text-muted-foreground">{post?.body}</p>
        </div>

        <div>
          <h3 className="font-semibold text-blue-500">작성자</h3>
          {isUserLoading && <p>작성자 정보 불러오는 중...</p>}
          {isUserError && <p>작성자 조회 실패</p>}
          {user && (
            <span className="font-medium">
              {user.name} ( {user.email} )
            </span>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-blue-500">댓글</h3>
          {isCommentsLoading && <p>댓글 불러오는 중...</p>}
          {isCommentsError && <p>댓글 조회 실패</p>}
          {comments && comments.length === 0 && <p>댓글이 없습니다.</p>}
          {comments?.map((comment) => (
            <div
              key={comment.id}
              className="rounded-md border p-2 bg-background"
            >
              <p className="font-medium">
                {comment.name} ( {comment.email} )
              </p>
              <p className="text-sm text-muted-foreground">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
