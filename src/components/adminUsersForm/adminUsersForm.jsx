"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUsersForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
  <>
    <h1>Add New User</h1>
    <form className=" rounded-md space-y-5" action={formAction}>
    

      <input
        className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
        type="text"
        placeholder="email"
        name="email"
      />

      <input
        className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
        type="password"
        placeholder="password"
        name="password"
      />

      <select
        className="d-block  w-full rounded-md bg-color-dark-soft px-2 py-3 focus:outline-none text-white"
        name="isAdmin"
        id=""
      >
        <option value="fasle" disabled>
          isAdmin?
        </option>

        <option value="fasle">No</option>
        <option value="true">Yes</option>
      </select>

      <button className="d-block w-full rounded-md hover:opacity-75 bg-blue-700 text-center px-2 py-3 focus:outline-none text-white">
        Add
      </button>

      <p className="text-center text-sm ">{state?.error}</p>
    </form></>
  );
};

export default AdminUsersForm;
