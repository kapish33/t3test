import { type AppType } from "next/dist/shared/lib/utils";

import "@local/styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
