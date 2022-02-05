import styled from "styled-components";

export const StyledSelect = styled.div`
    position: relative;
    max-width: 16.845rem;
    margin-bottom: 1.25rem;

    &::after {
        position: absolute;
        content: "▼";
        font-size: 1rem;
        top: 1.8rem;
        right: 1rem;
        transform: translateY(-50%);
        color: var(--black-3);
    }

    select {
        display: block;
        width: 100%;
        background-color: var(--black-2);
        color: var(--white);
        padding: 0.8rem 1rem 0.75rem 1.3rem;
        border-radius: 0.468775rem;
        font-size: 1.7rem;
    }
`;
