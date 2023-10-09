import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import ListItem from "./ListItem";
export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <h2 className="text-4xl font-bold mt-8 text-white ">Blog</h2>
      <ul className="hover:text-">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
