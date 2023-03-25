// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IUserLogin } from '@/types';

const user = {
  name: 'Samuel Vieira',
  email: 'sam@mail.com',
  password: hashSync('123456', 10),
};

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body as IUserLogin;
  const verifyPassword = compareSync(password, user.password);

  if (email !== user.email || !verifyPassword) {
    return res.status(401).json({ message: 'invalid credentials' });
  }
  const token = sign({}, 'secret_key', { expiresIn: '1h' });
  return res
    .status(200)
    .json({ token, user: { name: user.name, email: user.email } });
};

export default login;
