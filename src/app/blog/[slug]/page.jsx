import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/controller";
import Image from "next/image";
import { Suspense } from "react";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
// fetch with an api
const post = await getData(slug)

// fetch without api
  // const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};
// FATACH DATA WITHOUT API
const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className="flex space-x-20">
      <div className="hidden md:block md:w-1/3 h-[80vh] relative">
        <Image fill src={post.img} />
      </div>
      <div className="w-full md:w-2/3 space-y-10">
        <h1 className="text-3xl  font-bold text-white">{post.title} </h1>
        <div className="flex text-sm space-x-5">
          <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div>
            <p className="mb-1 text-gray-500">Published</p>
            <p>{post.createdAt.toString().slice(4, 16)}</p>
          </div>
        </div>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};
export default SinglePostPage;
