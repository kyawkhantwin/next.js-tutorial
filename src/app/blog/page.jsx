
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/controller";


export const metadata = {
  title:"Blog Page",
  description: "Blog Description",
};

// WITH AN API
// const getData = async () =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next: {revalidate:3600}})
//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }
//   const data = await res.json()
//   return data
// }



const BlogPage =async () => {
  //WITH API
  // const posts = await getData()

  //WITHOUT API
  
  const posts = await getPosts()

  
  return (
    <div className="flex flex-wrap justify-between">
      { posts.map((post) => {
        return <div className="w-1/2 md:w-1/3  my-5"  key={post.id}> <PostCard post={post} /> </div> 
      })}
  

    </div>
  );
};

export default BlogPage;
