import React from 'react'
import Link from 'next/link'
import get
type Props = {
  post:BlogPost
}

export default function ListItem({post}: Props) {
  const {id,title,date} = post
  return (
    <div>ListItem</div>
  )
}