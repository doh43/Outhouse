import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";
import FavouriteLayout from "../favourites/layout";
import { SafeUser } from "@/app/types";

// fetch current user from the server
const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      favouriteId: user.favouriteId,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      emailVerified: user.emailVerified?.toISOString() || null,
    } as SafeUser;
  } catch (error: any) {
    return null;
  }
};

const ProfilePage = async () => {
  const user = await getCurrentUser();

  return <FavouriteLayout initialUser={user} />;
};

export default ProfilePage;
