import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import SessionProvider from "../SessionProvider";
import Login from "./Login";
import Home from "./page";

const LoginLayout = async () => {
  const session = await getServerSession(authOptions);
  return (
    <SessionProvider session={session}>
      {!session ? <Login /> : <Home />}
    </SessionProvider>
  );
};

export default LoginLayout;
