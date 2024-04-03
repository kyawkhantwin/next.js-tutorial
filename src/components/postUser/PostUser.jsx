import { getUser } from "@/lib/controller";
import Image from "next/image";
import React from "react";

const PostUser = async ({ userId }) => {
  // FETCH DATA WITHout AN API

  const user = await getUser(userId);

  return (
    <>
      <div className="relative rounded-full">
        <Image 
        className="rounded-full" 
        width={45} 
        height={20} 
        src={user.img? user.img : "/noavatar.png"} 
        />
      </div>
      <div>
      <p className="mb-1 text-gray-500">Author</p>
        <p>{user.username}</p>
      </div>
    </>
  );
};

export default PostUser;
