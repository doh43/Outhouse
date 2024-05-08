import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "just-a-placeholder",
    //     },
    //     password: {
    //       label: "Password:",
    //       type: "password",
    //       placeholder: "just-a-placeholder",
    //     },
    //   },
    //   async authorize(credentials) {
    //     // retrieving user data to verify credentials
    //     // hard coded for now...
    //     const user = { id: "42", name: "Daniel", password: "cs2212" };

    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
};
export default NextAuth(authOptions);
