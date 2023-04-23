import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Rubik",
          colorPrimary: "#3455db",
          colorSuccess: "#00a566",
          colorWarning: "#ff4500",
          colorError: "#ff0000",
          colorInfo: "#3455db",
          colorTextBase: "#2d383c",

          borderRadius: 16,
        },
      }}
    >
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </ConfigProvider>
  );
}
