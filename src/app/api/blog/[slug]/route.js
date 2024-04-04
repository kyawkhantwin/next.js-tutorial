import { deletePost } from "@/lib/action";
import { connectToDb } from "@/lib/connect";
import { getPost } from "@/lib/controller";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await getPost(slug);
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request, { params }) => {
    const { slug } = params;
    try {
      connectToDb();
      const post =await Post.deleteOne({slug})
      return NextResponse.json("Post Dee");
    } catch (error) {
      console.log(error);
    }
  };
