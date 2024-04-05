"use client";

import { addPost } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const AdminPostsForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <>
      <h1>Add New Post</h1>
      <form className=" bg-color-dark rounded-md space-y-5" action={formAction}>
        <input
          className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
          type="hidden"
          placeholder="userId"
          value={userId}
          name="userId"
        />
        <input
          className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
          type="text"
          placeholder="title"
          name="title"
        />

        <input
          className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
          type="text"
          placeholder="slug"
          name="slug"
        />
        <input
          className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
          type="file"
          placeholder="img"
          name="img"
        />
        <textarea
          rows={5}
          className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
          type="text"
          placeholder="desc"
          name="desc"
        />

        <button className="d-block w-full rounded-md hover:opacity-75 bg-blue-700 text-center px-2 py-3 focus:outline-none text-white">
          Add
        </button>

        <p className="text-center text-sm ">{state?.error}</p>
      </form>
    </>
  );
};

export default AdminPostsForm;
