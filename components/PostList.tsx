import {motion} from 'framer-motion'
import { PostContent } from "../lib/posts";
import Pagination from "./Pagination";
import PostItem from "./PostItem";

type Props = {
  posts: PostContent[];
  /* tags: TagContent[]; */
  pagination: {
    current: number;
    pages: number;
  };
};


const PostList = ({ posts, pagination }: Props) => { 
    return (
        <div className="flex flex-col w-full min-h-screen px-2 mt-2">
            {posts.map(post => (
                <PostItem key={post.slug} post={post} />
            ))}
            {/* <Pagination
                current={pagination.current}
                pages={pagination.pages}
                link={{
                    href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
                    as: (page) => (page === 1 ? null : "/posts/page/" + page),
                }}
                /> */}
        </div>
    );

}


export default PostList;
