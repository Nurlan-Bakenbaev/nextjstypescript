import React from 'react'
import Link from 'next/link'

type Props = {
  post:BlogPost
}

export default function ListItem({post}: Props) {
  const {id,title,data} = post
  return (
    <div>ListItem</div>
  )
}