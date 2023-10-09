import React from "react";
import { getSortedPostsData } from "../../../../lib/posts";

export default async function Post({ params }: { params: { postId: string } }) {
 const posts = getSortedPostsData
    return <div>page</div>;
}
