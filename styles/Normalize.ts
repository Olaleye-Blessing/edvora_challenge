import { createGlobalStyle } from "styled-components";

export const Normalize = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

    html {
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%; 
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    a {
        background-color: transparent;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    input {
        /* overflow: visible; */
    }

    button,
    select {
        text-transform: none;
    }
`;
