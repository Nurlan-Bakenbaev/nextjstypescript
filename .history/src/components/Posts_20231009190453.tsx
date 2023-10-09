import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import ListItem from "./ListItem";
export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="flex flex-col max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mt-8 text-white ">Blog</h2>
      <ul >
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
