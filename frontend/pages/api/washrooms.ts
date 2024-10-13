import { NextApiRequest, NextApiResponse } from 'next';
import getWashrooms from '@/app/actions/getWashrooms'; 
import getWashroomRatings from '@/app/actions/getWashroomRatings';  
import prisma from '@/app/libs/prismadb'; // Assuming you're using Prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { washroomId, userEmail } = req.query; // Get washroomId and userId from query parameters

    if (!washroomId) {
      // If washroomId is not provided, return all washrooms
      const data = await getWashrooms();
      res.status(200).json(data);
      return;
    }

    // Fetch general ratings for the washroom
    const ratings = await getWashroomRatings(washroomId as string);

    // Fetch the user's specific rating if userId is provided
    let userRating = null;
    if (userEmail) {
      userRating = await prisma.rating.findFirst({
        where: {
          washroomId: washroomId as string,
          userEmail: userEmail as string,
        },
      });
    }

    // Return both the general ratings and the user's specific rating
    res.status(200).json({
      washroomRatings: ratings,
      userRating: userRating || null, // Return null if no user rating exists
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch washrooms or ratings data' });
  }
}
