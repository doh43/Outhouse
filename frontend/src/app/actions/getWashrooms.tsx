// retrieves relevant data from the database related to the washrooms
import { getServerSession } from "next-auth/next";
require('dotenv').config({ path: './.env.local' });
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

interface Geometry {
  id: string;
  locationId: string;
  type: string;
  coordinates: number[];
}

interface Location {
  id: string;
  address?: string;
  geometry: Geometry;
  washroom?: Washroom;
}

interface Washroom {
  id: string;
  name: string;
  descripton: string;
  locationId: string;
  ratings: Rating[];
  location: Location;
}

interface Rating {
  averageRating: number;
}

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getWashrooms() {
  try {
    // fetch washrooms data from Prisma database
    const washrooms: Washroom[] = await prisma.washroom.findMany({
      include: {
        location: {
          include: {
            geometry: true,
          },
        },
      },
    });

    // console.log('Fetched washrooms from DB:', washrooms); 

    const formattedWashrooms = washrooms.map(washroom => ({
      id: washroom.id,
      name: washroom.name,
      description: washroom.descripton,
      ratings: washroom.ratings,
      address: washroom.location.address,
      coordinates: washroom.location.geometry.coordinates,
    }));

    return {
      washrooms: formattedWashrooms,
    };
  } catch (error) {
    return {
      washrooms: [],
    };
  }
}
