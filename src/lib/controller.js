import { connectToDb } from "./connect";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error.message);
    throw new Error(error)
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();

    const posts = await Post.findOne({ slug });
    return posts;
  } catch (error) {
    console.log(error.message);
    throw new Error(error)
  }
};

export const getUser = async (id) => {
  noStore()
  try {
    connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error.message);
    throw new Error(error)
   
  }
};

export const getUsers = async () => {
  try {
    connectToDb();

    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to fetch users");
  }
};

