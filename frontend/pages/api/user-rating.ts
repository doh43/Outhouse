// pages/api/user-rating.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb"; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { washroomId, userId } = req.query;

  try {
    const existingRating = await prisma.rating.findFirst({
      where: {
        washroomId: washroomId as string,
        userId: userId as string,
      },
    });

    if (existingRating) {
      res.status(200).json(existingRating); // return the user's rating if found
    } else {
      res.status(404).json({ message: 'No rating found for this user' });
    }
  } catch (error) {
    console.error('Error fetching user rating:', error);
    res.status(500).json({ error: 'Failed to fetch user rating' });
  }
}
