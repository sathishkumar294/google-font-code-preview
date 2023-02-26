import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps}></Component>
    </NextUIProvider>
  );
}

export default MyApp;
