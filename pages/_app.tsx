import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../styles/theme";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = true ? darkTheme : lightTheme;

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
