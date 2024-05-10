"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex w-full h-[750px]">
      <div className="flex justify-center w-full">
        <div className="flex h-[32px] border border-solid-black justify-center items-center">
          <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
      </div>
    </div>
  )
};

export default Login;
