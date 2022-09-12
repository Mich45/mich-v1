import type { NextApiRequest, NextApiResponse } from 'next';
import Pageclip from 'pageclip';
// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);
    console.log(body);
    let pageclip = new Pageclip(process.env.PAGECLIP_API_KEY);
    //Send an item up to Pageclip
    pageclip.send(body).then((response: any) => {
        console.log(response.status, response.data);
    });
    res.status(200).json({ message: 'Message sent successfully!' });
}
