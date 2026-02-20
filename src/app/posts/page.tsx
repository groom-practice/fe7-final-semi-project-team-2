"use client";

import PostListButtonMode from "@/components/posts/PostListButtonMode";
import PostListScrollMode from "@/components/posts/PostListScrollMode";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function PostListPage() {
  const [isScrollMode, setIsScrollMode] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Posts List</h1>
        <div className="flex justify-center items-center gap-2">
          <p className="text-sm">
            {isScrollMode ? "버튼 모드로 돌아가기" : "스크롤 모드 켜기"}
          </p>
          <Switch checked={isScrollMode} onCheckedChange={setIsScrollMode} />
        </div>
      </div>
      {isScrollMode ? <PostListScrollMode /> : <PostListButtonMode />}
    </div>
  );
}
