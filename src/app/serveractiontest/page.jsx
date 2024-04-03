import { addPost, deletePost } from "@/lib/action"

const SeerverActionTestPage = () => {
  return (
    <div className="text-black">
        <form  action={addPost}>
          <input type="text" placeholder="title" name="title" />
          <input type="text" placeholder="desc"  name="desc"/>
          <input type="text" placeholder="slug" name="slug"/>
          <input type="text" placeholder="userId" name="userId"/>
            <button  className="bg-color-white">Test Me</button>
        </form>
        <form action={deletePost}>
          <input type="text" placeholder="post id" name="id" />
          <button  className="bg-color-white">Delete</button>
          
        </form>
    </div>
  )
}

export default SeerverActionTestPage