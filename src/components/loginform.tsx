import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false); 
  
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4} minW={"200px"}>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input required focusBorderColor="blue.300" type="email"  />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input required focusBorderColor="blue.300" type={showPassword ? 'text' : 'password'}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type="submit"
                  variant={"default"}
                  _hover={{
                    bg: 'blue.700',
                  }}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

export default LoginForm