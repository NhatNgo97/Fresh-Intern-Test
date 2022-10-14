import { setCookies } from 'cookies-next';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// TODO: Task 3
// Build an API to handle login requests.
const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  //This is my JWT Login way
  try {
    if (req.method === 'POST') {
      //check email in database. in this case ,i use Mongoose to check it
      const email = req.body.email;
      const password = req.body.password;

      return res.status(200).json({
        email,
        password,
      });
    } else {
      // Handle any other HTTP method
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export default handler;
