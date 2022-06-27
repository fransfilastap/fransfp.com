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
        <div className={`px-2 cursor-pointer flex flex-col md:flex-row md:items-center md:justify-start md:space-x-10 w-full space-y-[0.1rem] py-10 ${styles['post-item']} group`}>
            <div className="md:w-1/6 md:flex">
                 <Date date={parseISO(post.date)} />
           </div>
            <div className="flex flex-col w-full space-y-3 md:w-5/6">
                <ReadingTime readingTime={post.readingTime} />
                <Link href={`/posts/${post.slug}`}>
                <a className="relative text-xl font-bold leading-[1.3em] text-black transition-colors duration-200 ease-in-out font-display group-hover:text-white after:absolute after:bottom-0 after:left-0 after:w-100 after:h-full after:border-b-2 after:border-gray-600 dark:hover:text-yellow-400 dark:text-gray-100">{post.title}</a>
                </Link>
                <div className="flex flex-row space-x-3">
                    {post.tags!.map(e => (
                    <Tag key={ e } value={e} />
                ))}
                </div>
            </div>
            <svg className="transition duration-200 ease-in-out delay-100 opacity-0 group-hover:opacity-100 h-52 w-52" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M246 10L48 208M79 10H246V177" className="stroke-pink-500" strokeWidth="10"/>
            </svg>
        </div>
    );
}

export default PostItem;