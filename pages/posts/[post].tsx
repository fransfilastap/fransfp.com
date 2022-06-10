import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import PostLayout from "../../components/PostLayout";
import { fetchPostContent } from "../../lib/posts";
import matter from "gray-matter";
import yaml from 'js-yaml';
import readingTime from "reading-time";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  readingTime: string;
  source: MDXRemoteSerializeResult;
};

interface Hash {
    [key: string]: any;
}

const slugToPostContent = (postContents => {
  let hash:Hash= {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPostContent());

export default function Post({
    title,
    dateString,
    slug,
    tags,
    author,
    description,
    readingTime,
    source
}: Props) {
    
    return (
        <PostLayout title={title} date={dateString} slug={slug} tags={[]} author={author} readingTime={readingTime}>
            <MDXRemote compiledSource={source.compiledSource}/>
        </PostLayout>
    );

}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map(it => "/posts/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.post as string;
    const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");

    const {content,data} = matter(source, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
    });



    const mdxSource = await serialize(content, { scope: data });
    const readTime = readingTime(content).text;
        
    return {
        props: {
        title: data.title,
        dateString: data.date,
        slug: data.slug,
        description: data.description,
        tags: data.tags,
        author: data.author,
        source: mdxSource,
        readingTime: readTime,
    },
    };
};


