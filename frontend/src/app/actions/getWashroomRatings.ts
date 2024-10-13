import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getWashroomRatings(washroomId: string) {
  try {
    const ratings = await prisma.rating.findMany({
      where: {
        washroomId: washroomId,
      },
    });
    return ratings;
  } catch (error) {
    console.error('Error fetching ratings:', error);
    throw new Error('Failed to fetch washroom ratings');
  }
}
