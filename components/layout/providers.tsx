'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/lib/theme'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}
