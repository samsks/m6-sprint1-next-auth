import { IUserData } from '@/types';
import {
  Flex,
  Box,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

const ProfileCard = ({ email, name }: IUserData) => {
  const router = useRouter();
  const logout = () => {
    destroyCookie(null, 'kenzie.token');
    destroyCookie(null, 'kenzie.userName');
    destroyCookie(null, 'kenzie.userEmail');
    router.push('/');
  };

  return (
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      as="form"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading>User Profile</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} minW={'200px'}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Text>Name: {name}</Text>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Text>Email: {email} </Text>
            </Stack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                type="submit"
                variant={'default'}
                onClick={() => logout()}
                _hover={{
                  bg: 'blue.700',
                }}
              >
                Sair
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ProfileCard;
