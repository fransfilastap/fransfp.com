import { PostContent } from "../lib/posts"

type Props = {
    readingTime: string
}

const ReadingTime = ({ readingTime }: Props) => {
    return (
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black max-w-fit">{readingTime}</p>
    );
}

export default ReadingTime;