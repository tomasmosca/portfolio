import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Puedes personalizar el tema aquí, si lo deseas
});

// eslint-disable-next-line react/prop-types
function ChakraWrapper({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default ChakraWrapper;
