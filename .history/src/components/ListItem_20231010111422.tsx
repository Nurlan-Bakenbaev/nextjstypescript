import React from "react";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";
type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white ">
      <Link
        className="underline hover:text-green-500"
        href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
