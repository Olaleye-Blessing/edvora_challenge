import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MainPage = styled.main`
    padding: 3rem 1rem;
    width: 100%;

    .page {
        &__products {
            color: var(--white-1);
            margin-bottom: 1rem;
        }

        &__main {
        }
    }

    @media only screen and (${device.mobileL}) {
        padding-right: 4rem;
        padding-left: 4rem;
    }

    @media only screen and (${device.tablet}) {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2rem;
        padding-left: 4rem;
        padding-right: 8rem;

        .page {
            &__main {
                min-width: 0;
            }
        }
    }
`;
