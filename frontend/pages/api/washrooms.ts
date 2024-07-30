import { NextApiRequest, NextApiResponse } from 'next';
import getWashrooms from '@/app/actions/getWashrooms'; // Adjust the import path

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getWashrooms();
    res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch washrooms data' });
  }
}
