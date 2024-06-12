import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { name, image } = req.body;

  if (!name && !image) {
    return res.status(400).json({ error: "Name or image is required" });
  }

  try {
    const updatedData: any = {};
    if (name) updatedData.name = name;
    if (image) updatedData.image = image;

    const updatedUser = await prisma.user.update({
      where: { email: session.user?.email || undefined },
      data: updatedData,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ error: "Failed to update user" });
  }
}
