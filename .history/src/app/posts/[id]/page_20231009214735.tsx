import React from "react";
import { getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: "Blog Next App",
  description: "Blog Page",
};

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
  return <div>page</div>;
}
