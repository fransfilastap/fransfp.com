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
        <div className="flex flex-col mt-3 space-y-[0.1rem]">
            <ReadingTime readingTime={post.readingTime} />
            <Link href={`/posts/${post.slug}`}>
                <a className="text-xl font-bold text-black transition-colors duration-200 ease-in-out hover:text-blue-500 dark:hover:text-blue-500 dark:text-gray-100">{post.title}</a>
            </Link>
            <Date date={parseISO(post.date)} />
        </div>
    );
}

export default PostItem;