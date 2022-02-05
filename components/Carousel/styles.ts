import styled from "styled-components";

export const StyledCarousel = styled.div`
    overflow: hidden;
    position: relative;
    background-color: var(--black-1);

    .carousel {
        &__inner {
            white-space: nowrap;
            transition: all 0.3s ease-in-out;
        }

        &__item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 200px;
            width: 25%;

            &:nth-child(even) {
                /* background: yellow; */
            }

            &:nth-child(odd) {
                /* background: brown; */
            }
        }

        &__control {
            position: absolute;
            background-color: transparent;
            border: none;
            outline: none;
            top: 50%;
            transform: translateY(-50%);
            background-color: red;
            z-index: 99;
            cursor: pointer;

            &-prev {
                left: 0;
            }

            &-next {
                right: 0;
            }
        }
    }
`;
