import Head from "next/head";
import Image from "next/image";
import Post from "../components/post/post";
import { getAllPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>hello</title>
      </Head>

      <div className="mb-10 p-3 border rounded">
        <Image className="object-cover rounded" src="/fi.jpg" alt="top" width={1280} height={500} />
      </div>
      
      <div className="flex justify-center flex-col items-center mb-10">

        <div className="text-lg mb-3">Posts</div>
      </div>

      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}

      </div>

    </div>
  );
}
// Static Site Generation / Incremental Static Regeneration
export async function getStaticProps(){
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}
