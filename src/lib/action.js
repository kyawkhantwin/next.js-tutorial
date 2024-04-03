"use server"

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post } from "./models";

export const addPost = async (fromData)=>{
 
    const {title,desc,userId,slug} = Object.fromEntries(fromData);

    try {
        connectToDb();
        const newPost = new Post({
            title,desc,slug,userId
        })

        await newPost.save();
        console.log("saved to db")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (fromData)=>{

    const {id} = Object.fromEntries(fromData);

    try {
        connectToDb();
        
        await Post.findByIdAndDelete(id);
        console.log("deleted to db")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
    }
}