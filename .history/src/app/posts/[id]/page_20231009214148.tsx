import React from "react";
import { getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
if(!)
  return <div>page</div>;
}
