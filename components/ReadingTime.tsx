import { PostContent } from "../lib/posts"

type Props = {
    readingTime: string
}

const ReadingTime = ({ readingTime }: Props) => {
    return (
        <p className="px-2 py-1 text-[0.5em] text-white bg-black rounded-full font-display max-w-fit">{readingTime}</p>
    );
}

export default ReadingTime;