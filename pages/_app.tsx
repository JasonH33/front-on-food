import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  }))

  return (
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  );
}

export default MyApp;
