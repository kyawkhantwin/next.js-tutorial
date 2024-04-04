"use client";

import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form
      className="w-[40%] bg-color-dark-soft px-8 py-6 rounded-md space-y-5"
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
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className="d-block  w-full rounded-md bg-color-dark px-2 py-3 focus:outline-none text-white"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="d-block  w-full rounded-md bg-color-dark px-2 py-3 focus:outline-none text-white"
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />
      <button className="d-block w-full rounded-md bg-blue-700 text-center px-2 py-3 focus:outline-none text-white">
        Register
      </button>

      <p className="text-center text-sm ">{state?.error}</p>
      <div className="text-sm grid items-center justify-center ">
        <Link href="/login">
          Have a account? <b>Login</b>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
