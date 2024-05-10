"use client";

import { useSession, signOut } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession(); // Destructuring to get 'session' directly

  return (
    <div>
      <div>{session?.user?.name}</div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default LoginPage;
