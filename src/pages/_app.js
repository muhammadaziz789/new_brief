import { ThemeProvider } from "@emotion/react";
import Layout from "components/Layout";
import "../styles/tailwind.css";
import "styles/globals.scss";
import theme from "mui-theme";
import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ScreenCaptureContainer from "screen-capture";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/http-client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {typeof window !== "undefined" ? (
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <ScreenCaptureContainer>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ScreenCaptureContainer>
            </ThemeProvider>
          </PersistGate>
        ) : (
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        )}
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
