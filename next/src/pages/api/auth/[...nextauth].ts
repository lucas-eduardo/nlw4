import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers';

const options: InitOptions = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    })
  ]
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
