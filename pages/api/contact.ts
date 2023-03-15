import type { NextApiRequest, NextApiResponse } from 'next';
import Pageclip from 'pageclip';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);
    let pageclip = new Pageclip(process.env.PAGECLIP_API_KEY);
    // Send an item up to Pageclip
    pageclip.send(body).then((response: any) => {
        if (response.status == 200) {
            console.log('Email sent');
            res.status(200).json({ message: 'Message sent successfully!' });
        } else {
            res.status(400).json({
                message: 'An error occured, please try again.',
            });
        }
    });
}
