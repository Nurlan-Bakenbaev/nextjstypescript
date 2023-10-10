import React from "react";
import { getSortedPostsData, getPostData} from "../../../../lib/posts";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
  const {title , date, contentHtml}= await getPostsData(postId)
  return <div>page</div>;
}
