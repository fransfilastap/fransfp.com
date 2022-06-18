import { parseISO } from "date-fns";
import Head from "next/head";
import BackButton from "./BackButton";
import Date from "./Date";
import { Layout } from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import ReadingTime from "./ReadingTime";

type Props = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
    children: React.ReactNode;
    readingTime: string;
};

const PostLayout = ({ title, date, slug, tags, author, description, children, readingTime }: Props) => {
    
    const dateString = parseISO(date);

    return (
        <Layout>
            <BasicMeta title={title} description={description} url={`/posts/${slug}`} />
            <OpenGraphMeta title={title} description={description} url={`/posts/${slug}`} />
            <div className="flex flex-col px-4 md:px-20 my-28 ">
                <div className="flex flex-col items-start justify-start w-full mb-10">
                    <BackButton label="Go back"/>
                </div>
                <article className="flex flex-col">
                    <section>
                        <ReadingTime readingTime={readingTime} />
                        <h1 className="mt-3 text-3xl font-bold text-black md:text-5xl font-display dark:text-white">{title}</h1>
                        <p className="text-lg font-bold text-gray-500 font-display"><Date date={dateString} /></p>
                    </section>
                    <section className="flex flex-col mt-10 overflow-x-scroll prose break-words prose-headings:font-display prose-h1:text-2xl">
                        {children}
                    </section>
               </article>
            </div>
        </Layout>
    );
}

export default PostLayout;