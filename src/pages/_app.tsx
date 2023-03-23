import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import custonTheme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={custonTheme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}