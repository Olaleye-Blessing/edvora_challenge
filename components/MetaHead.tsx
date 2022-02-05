import Head from "next/head";
import { FC } from "react";

const MetaHead: FC = () => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
            <title>Edvora Challenge</title>
            <meta
                name="description"
                content="Solution to Edvora Internship Challenge"
            />
        </Head>
    );
};

export default MetaHead;
