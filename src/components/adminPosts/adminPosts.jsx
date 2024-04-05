import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/controller";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <div className="space-y-5">
        {posts.map((post) => {
          return (
            <div className="flex justify-between items-center" key={post.id}>
              <div className="flex space-x-5">
                <div>
                  <Image
                    width={200}
                    height={200}
                    src={post?.img || "/noAvatar.png"}
                  ></Image>
                </div>
                <div>
                  <p>Title : {post.title}</p>
                  <p>Desc : {post.desc}</p>
                </div>
              </div>
              <form action={deletePost}>
                <input type="hidden" value={post.id} name="id" />
                <button className="bg-red-500 px-2 py-3 rounded-md">
                  Delete
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPosts;
