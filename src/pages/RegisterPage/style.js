import styled from 'styled-components';


export const ContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    
`

export const HeaderRegister = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 32.3rem;
    padding: 2rem 0;

   
    a{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        font-size: 1.2rem;
        font-weight: 600;
        color: var(--grey000);
        background-color: var(--grey300);
        padding: 0 1.624rem;
        height: 4.01rem;
        width: 6.749rem;
        border-radius: 0.4rem;
        
    }

    a:hover{
        cursor: pointer;
        background-color: var(--grey200);
    }
`
