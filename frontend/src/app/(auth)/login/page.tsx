"use client";

import { useSession, signOut } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession(); // Destructuring to get 'session' directly

  return (
    <>
      <div>{session?.user?.name}</div>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
};

export default LoginPage;
