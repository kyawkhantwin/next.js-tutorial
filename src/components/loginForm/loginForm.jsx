"use client";

import { login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form
      className=" bg-color-dark-soft rounded-md space-y-5"
      action={formAction}
    >
      <input
        className="d-block  w-full rounded-md bg-color-dark px-2 py-3 focus:outline-none text-white"
        type="text"
        placeholder="username"
        name="username"
      />
 
      <input
        className="d-block  w-full rounded-md bg-color-dark px-2 py-3 focus:outline-none text-white"
        type="password"
        placeholder="password"
        name="password"
      />
   
      <button className="d-block w-full rounded-md hover:opacity-75 bg-blue-700 text-center px-2 py-3 focus:outline-none text-white">
        Login
      </button>

      <p className="text-center text-sm ">{state?.error}</p>
      <div className="text-sm grid items-center justify-center ">
        <Link href="/register">
         {"Don't have a account?"} <b>Register</b>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
