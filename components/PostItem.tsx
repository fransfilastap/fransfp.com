import { parseISO } from "date-fns";
import Link from "next/link";
import { PostContent } from "../lib/posts";
import Date from "./Date";
import ReadingTime from "./ReadingTime";

type PostItemProps = {
    post: PostContent;
}
const PostItem = ({ post }: PostItemProps) => {
    return (
        <div className="flex flex-col w-full mt-3 space-y-[0.1rem]">
            <ReadingTime readingTime={post.readingTime} />
            <Link href={`/posts/${post.slug}`}>
                <a className="relative text-xl font-bold leading-[1.3em] text-black transition-colors duration-200 ease-in-out font-display hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:w-100 after:h-full after:border-b-2 after:border-gray-600 dark:hover:text-yellow-400 dark:text-gray-100">{post.title}</a>
            </Link>
            <Date date={parseISO(post.date)} />
            
        </div>
    );
}

export default PostItem;