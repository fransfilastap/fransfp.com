import { PostContent } from "../lib/posts"

type Props = {
    readingTime: string
}

const ReadingTime = ({ readingTime }: Props) => {
    return (
        <p className="px-2 py-1 text-xs text-white rounded-full bg-violet-500 font-display max-w-fit">{readingTime}</p>
    );
}

export default ReadingTime;