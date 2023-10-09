import React from "react";
import { getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";


export default function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData();
    const { postId } = params;
     const post =  posts.find((post) => post.id === postId)
     if(!post){
        re
     }
     return {
        title: post.title,
     }
}
  

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
  return <div>page</div>;
}
