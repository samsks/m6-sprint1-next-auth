import { createContext, useContext, useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { IProviderProps, IUserData, IUserLogin } from '@/types';
import api from '@/services/api';

interface AuthProviderData {
  setToken: (value: string) => void;
  login: (userData: IUserLogin) => void;
  token: string | undefined;
  user: IUserData | null;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: IProviderProps) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<IUserData | null>(null);
  const router = useRouter();

  const login = (userData: IUserLogin) => {
    api
      .post('/login', userData)
      .then((res) => {
        setCookie(null, 'kenzie.token', res.data.token, {
          maxAge: 60 * 30,
          path: '/',
        });
        setCookie(null, 'kenzie.userName', res.data.user.name, {
          maxAge: 60 * 30,
          path: '/',
        });
        setCookie(null, 'kenzie.userEmail', res.data.user.email, {
          maxAge: 60 * 30,
          path: '/',
        });
        setToken(res.data.token);
        setUser(res.data.user);
        router.push('/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthContext.Provider value={{ login, token, user, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
