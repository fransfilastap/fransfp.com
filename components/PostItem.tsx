import { parseISO } from "date-fns";
import Link from "next/link";
import { PostContent } from "../lib/posts";
import Date from "./Date";
import ReadingTime from "./ReadingTime";

import styles from "./PostItem.module.css"
import Tag from "./Tag";

type PostItemProps = {
    post: PostContent;
}
const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className={`cursor-pointer flex flex-col md:items-center md:justify-start md:space-x-10 w-full space-y-[0.1rem] py-3 ${styles['post-item']} group after:bg-purple-400`}>
            <div className="flex flex-col w-full space-y-1 md:w-5/6">
                <ReadingTime readingTime={post.readingTime} />
                <Link href={`/posts/${post.slug}`}>
                    <a className="relative text-xl font-bold leading-[1.3em] text-black transition-colors duration-200 ease-in-out font-display group-hover:text-white after:absolute after:bottom-0 after:left-0 after:w-100 after:h-full dark:text-gray-100">{post.title}</a>
                </Link>
                <Date date={parseISO(post.date)} />
                <div className="flex flex-row space-x-3">
                    {post.tags!.map(e => (
                    <Tag key={ e } value={e} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default PostItem;