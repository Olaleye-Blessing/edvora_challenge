import type { AppProps } from "next/app";
import { Global } from "../styles/Global";
import { Normalize } from "../styles/Normalize";
import { Variables } from "../styles/Varaibles";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* styles start */}
            <Variables />
            <Normalize />
            <Global />
            {/* styles end */}

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
