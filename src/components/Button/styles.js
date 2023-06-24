import styled, {css} from 'styled-components';


export const StyledButton = styled.button`

    ${({ submit }) =>
        submit &&
        css`
        type: submit;
        `}

    background-color: var(--color-primary);
    color: var(--grey000);

    &:hover{
        cursor: pointer;
        background-color: var(--color-primary-focus);

    }

`