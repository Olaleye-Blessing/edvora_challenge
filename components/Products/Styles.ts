import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.section`
    margin-bottom: 3rem;

    h3 {
        border-bottom: 0.1rem solid var(--white-2);
        padding-bottom: 1rem;
        font-family: var(--font-family-roboto);
    }

    .slider {
        background-color: var(--black-1);
        border-radius: 1.5rem;
        margin-top: 1.2rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .splide {
        &__arrow {
            background: transparent;
            font-size: 2rem;

            &:disabled {
                display: none;
            }

            svg {
                fill: var(--white);
            }

            &--prev {
                left: -1rem;
            }

            &--next {
                right: -1rem;
            }
        }
    }

    @media only screen and (${device.mobileL}) {
        .slider {
            /* padding-left: 3.5rem; */
        }

        .splide {
            &__arrow {
                &--prev {
                    left: -4rem;
                }

                &--next {
                    right: -3.7rem;
                }
            }
        }
    }
`;

export const StyledProductFilter = styled.aside`
    background: var(--black-1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
    padding: 2.4rem 3.455rem 4.25rem 3rem;
    padding: 2.4rem 1.5rem 3rem;

    .aside {
        &__filter {
            &-head {
                color: var(--black-3);
                padding-bottom: 0.7rem;
                margin-bottom: 3.6rem;
                border-bottom: 0.1rem solid;
            }
        }
    }

    @media only screen and (${device.tablet}) {
        flex: 1 0 auto;
        max-width: 22.8rem;
    }
`;
