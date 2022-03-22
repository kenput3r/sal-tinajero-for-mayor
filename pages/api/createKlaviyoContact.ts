// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

const endpoint = `https://a.klaviyo.com/api/v2/list/${process.env.KLAVIYO_LIST_ID}/members?api_key=${process.env.KLAVIYO_API_KEY}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = {
    profiles: [
      {
        email: req.body.email,
        first_name: req.body.fName,
        last_name: req.body.lName,
      },
    ],
  };

  try {
    const response = await axios.post(endpoint, data);
    res.status(200).json(response.data);
  } catch (error: any | unknown) {
    res.status(error?.response?.statusCode || 418).json(error);
  }
}
