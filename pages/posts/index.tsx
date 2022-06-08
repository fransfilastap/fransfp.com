import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { Layout } from "../../components/Layout";
import PostList from "../../components/PostList";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";

type Props = {
  posts: PostContent[];
  /* tags: TagContent[]; */
  pagination: {
    current: number;
    pages: number;
  };
};

const Index = ({ posts, pagination }: Props) => {
    
    const storyAndIdeaBannerRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <Head>
                <title>Post - fransfp.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto">
                <div className="flex flex-col items-start justify-start mt-24 md:flex-row md:space-x-5">
                    <div className="w-full md:w-1/3">
                        <div ref={storyAndIdeaBannerRef} className="w-full p-4 rounded-lg bg-amber-500">
                            <h1 className="font-bold text-blue-500 text-7xl">Stories & Ideas</h1>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-2/3">
                        <PostList posts={posts} pagination={{
                            current: 0,
                            pages: 0
                        }} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;

const POST_PER_PAGE = 10;

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, POST_PER_PAGE);
  /* const tags = listTags(); */
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / POST_PER_PAGE),
  };
  return {
    props: {
      posts,
      pagination,
    },
  };
};