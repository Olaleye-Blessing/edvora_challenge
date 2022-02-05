import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        line-height: 1.5;
        background-color: var(--general-bg);
        color: var(--general-fg);
        font-family: var(--font-family-general);
    }

    select {
        -webkit-appearance: none;
        appearance: none;
        font-size: 100%;
        font-family: inherit;
        border: none;
        outline: none;
        background-color: transparent;
    }

    ul {
        list-style: none;
    }

`;
