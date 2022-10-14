import { setCookies } from 'cookies-next';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean,
  message: string,
  accessToken?: string,
}

// TODO: Task 3
// Build an API to handle login requests.
const handler: NextApiHandler = async ( req : NextApiRequest,res :NextApiResponse<Data>) => {
  //This is my JWT Login way
  try{
    if (req.method === 'POST') {
      //check email in database. in this case ,i use Mongoose to check it
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Email or Password is incorrect, Please try again",
          accessToken: undefined,
        });
        return;
      }

      // encode the password and compare in the db.
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(401).json({
          success: false,
          message: "Email or Password is incorrect, Please try again",
          accessToken: undefined
        });
        return;
      }

      //if email and password are correct so we start
      //generate access Token and refresh Token
      //access is gonna be saved in redux store or useContext 
      //for the verifying while refresh token is saved in cookie.
      const accessToken = "a generated access token"
      const refreshToken = "a generated refresh token"

      //STORE REFRESH TOKEN IN COOKIE
      setCookies('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: 'none',
      });

      res.status(200).json({
        success: true,
        message: "succeed",
        accessToken: accessToken,
      });
    } else {
      // Handle any other HTTP method
    }
  } catch(err) {
    res.status(500).json({
      success: false,
      message: "ERROR",
      accessToken: undefined,
    });
  }
};

export default handler;
