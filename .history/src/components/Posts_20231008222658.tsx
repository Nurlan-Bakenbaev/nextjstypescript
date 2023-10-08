import React from 'react'
import { getSortedPostsData } from '../../lib/posts'
export default function Posts() {
    const posts = getSortedPostsData()

  return (
    <section>
        <h2></h2>
        <ul>
            {posts.map((post)=)}
        </ul>
    </section>
  )
}
