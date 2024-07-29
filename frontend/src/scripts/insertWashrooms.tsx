const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env.local') }); // Load .env.local

const prisma = new PrismaClient();

const insertWashrooms = async () => {
  try {
    const filePath = path.join(__dirname, '../app/data/TorCityWashrooms.json'); 
    const data = await fs.readFile(filePath, 'utf-8');
    const washrooms = JSON.parse(data);

    for (const washroom of washrooms) {
      const { name, properties } = washroom;
      const { id, location_details, url, address, x_coordinate, y_coordinate } = properties;

      // create Location with nested Geometry
      const location = await prisma.location.create({
        data: {
          address,
          geometry: {
            create: {
              coordinates: [y_coordinate, x_coordinate],
              type: 'Point',
            }
          }
        }
      });

      // create Washroom
      await prisma.washroom.create({
        data: {
          name,
          descripton: location_details,
          locationId: location.id,
        }
      });
    }
    console.log('Washrooms inserted successfully');
  } catch (error) {
    console.error('Error inserting washrooms:', error);
  } finally {
    await prisma.$disconnect();
  }
};

insertWashrooms();
