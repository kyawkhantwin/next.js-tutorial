"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";
import { isRedirectError } from "next/dist/client/components/redirect";

export const addPost = async (formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const handleGitHudLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (prevState,formData) => {
  const { username, email, password, confirmPassword, img } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: "Comfirm Password do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ email });

    if (user) {
      return { error: "Email alredy registered" };
    }
    
    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const login = async (prevState,formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log("error" , error.message)
    if (error.message.includes('CredentialsSignin')){
    return  {error: "Invalid username or password"}

    }
    if (isRedirectError(error)) {
       throw error
    }
   
    return  {error : "Something Went wrong" }
  }
};
