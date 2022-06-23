import { GetStaticProps, NextPage } from "next";
import FFPCard from "../../components/FFPCard";
import { Layout } from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
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

    return (
        <Layout>
        <BasicMeta title="Posts" description="Frans Filasta Pratama Blog Posts" />
        <OpenGraphMeta
          title="Posts"
          description="Frans Filasta Pratama Blog Posts"
          url={`${process.env.NEXT_SITE_URL}/posts`}
          />
            <div className="flex flex-col px-2 md:px-20 ">
                <div className="flex flex-col items-start justify-start mt-24 md:flex-row md:space-x-5">
                    <div className="w-full md:w-1/3">
                        <FFPCard title="Stories &amp; Ideas" description="Frans Filasta Pratama Blog Posts" />
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