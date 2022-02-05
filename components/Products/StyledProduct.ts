import styled from "styled-components";

export const StyledProduct = styled.article`
    border-radius: 0.468775rem;
    background-color: var(--black-2);
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem 1.4rem 1.2rem;
    color: var(--white-3);

    .product {
        &__cont {
            display: flex;
            align-items: stretch;

            &-first {
                margin-right: 2.2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            &-second {
            }
        }

        &__fig {
            width: 7rem;
            height: 7rem;
        }

        &__location {
        }

        &__name {
            font-size: 2rem;
            color: var(--white);
        }

        &__brand {
        }

        &__price {
            font-size: 1.3rem;
            color: var(--white);
        }

        &__date {
            margin-top: 1.4rem;
        }

        &__discription {
            margin-top: 0.5rem;
        }
    }
`;
