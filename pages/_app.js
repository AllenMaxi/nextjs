import { ThemeProvider } from "@chakra-ui/core";
import CSSReset from "@chakra-ui/css-reset";
import { ProvideAuth } from "../lib/auth";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
        <CSSReset />
        <Component {...pageProps} />
      </ProvideAuth>
    </ThemeProvider>
  );
}

export default MyApp;
