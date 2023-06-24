import { createGlobalStyle } from 'styled-components';

export const ModalStyled = createGlobalStyle`

    .modal-overlay{
        background-color: rgba(0,0,0,0.6);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-modal-content{
        background-color: var(--grey300);
        width: 90%;
        max-width: 40rem;
        border-radius: 0.4rem;
    }

    .edit-modal-content{
        background-color: var(--grey300);
        width: 90%;
        max-width: 40rem;
        border-radius: 0.4rem;
    }
`
