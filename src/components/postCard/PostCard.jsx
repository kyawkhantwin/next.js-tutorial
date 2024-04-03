import Image from 'next/image'
import Link from 'next/link'
import React  from 'react'


const PostCard = ({post}) => {
 
  return (
    <div>
        <div className="flex justify-center items-center">
            <div className="w-full h-[50vh] relative">
                <Image fill  
                src={post.img} />
            </div>
            <p className="text-[.5rem] rotate-90 text-nowrap">Nov 5 2024</p>
        </div>
        <div className=" text-white space-y-2 mt-2 text-sm">
            <p className='font-bold'>{post.title}</p>
            <p className='text-[.5rem] text-gray-400 font-bold'>{post.desc}</p>
            <Link href={`/blog/${post.slug}`} className='underline text-[.6rem] cursor-pointer'>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard