import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    res.status(200).send(body);
}
