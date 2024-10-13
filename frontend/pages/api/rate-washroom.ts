// pages/api/rate-washroom.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { ObjectId } from 'mongodb';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, washroomId, clean, easyToFind, privacy } = req.body;

    try {
      const userObjectId = new ObjectId(userId);
      const washroomObjectId = new ObjectId(washroomId);

      // calculate average rating
      const averageRating = (clean + easyToFind + privacy) / 3;

      // create a new rating in the database
      const newRating = await prisma.rating.create({
        data: {
          userId: userObjectId,
          washroomId: washroomObjectId,
          clean,
          easyToFind,
          privacy,
          averageRating,
        },
      });

      res.status(200).json({ message: 'Rating submitted successfully', newRating });
    } catch (error) {
      console.error('Error creating rating:', error);
      res.status(500).json({ error: 'Error creating rating' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
