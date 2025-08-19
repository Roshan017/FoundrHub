import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Author {
  _id: number;
  name: string;
}
interface StartupCardType {
  _createdAt: Date | string;
  views: number;
  author: Author;
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { Button } from "./ui/button";

const StartUpCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name: authorName },
    _id,
    description,
    image,
    category,
    title,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-violet-600" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-24-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt={title} className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button
          variant={"ghost"}
          className="startup-card_btn !text-white"
          asChild
        >
          <Link href={`/startup/${_id}`}>
            <p className="text-16-medium">Details</p>
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default StartUpCard;
