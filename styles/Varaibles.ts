import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --general-bg: #292929;
        --general-fg: rgba(250, 250, 250, 0.87);

        --black-1: #131313;
        --black-2: #232323;
        --black-3: #A5A5A5;

        --white: #fff;
        --white-1: rgba(250, 250, 250, 0.5);
        --white-2: rgba(203, 203, 203, 0.5);
        --white-3: rgba(250, 250, 250, 0.6);
    }
`;
