import { GetServerSideProps } from 'next';
import ProfileCard from '@/components/profileCard';
import { IUserData } from '@/types';
import nookies from 'nookies';

export default function Profile({ name, email }: IUserData) {
  return (
    <>
      <ProfileCard email={email} name={name} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  console.log(cookies);
  if (!cookies['kenzie.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      name: cookies['kenzie.userName'],
      email: cookies['kenzie.userEmail'],
    },
  };
};
