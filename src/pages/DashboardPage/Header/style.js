import { styled } from 'styled-components';


export const StyledDashboardHeaderContainer = styled.header`
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;


    a{
        background-color: var(--grey300);
        color: var(--grey000);
        height: 3.2rem;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0 1.624rem;
        transition: 0.5s;

    }

    a:hover{
        cursor: pointer;
        background-color: var(--grey200);

    }
`

