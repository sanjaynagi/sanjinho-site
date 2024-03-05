import { ChakraProvider } from '@chakra-ui/react';
import '../src/utils/global.styles.css';

import theme from '../src/theme';
import { Fonts, MainLayout } from '../src/components';

const App = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
