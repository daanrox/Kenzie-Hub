import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-height: 89.119rem;
    gap: 0.3rem;
    max-width: 32.3rem;
    border-radius: 0.4rem;
    background-color: var(--grey300);
    padding: 1.15rem 2.5rem;

    .headerContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
    }

    .warning{
        position: relative;
        bottom: 1rem;
    }


    label{
        font-size: 1.218rem;
        font-weight: 400;
        color: var(--grey000);
        margin-top: 0.5rem;
    }
    
    input{
        height: 4.8rem;
        padding: 0 1.624rem;
        border-radius: 0.4rem;
        margin-bottom: 1.2rem;
        
        background-color: var(--grey200);
        border: 0.1rem solid var(--grey200);
        
        color: var(--grey000);

        ::placeholder{
            color: var(--grey100);
            
        }

    }
    
    input:focus{
        border: 0.1rem solid var(--grey000);
    }
    input:invalid{
        border: 0.1rem solid var(--grey200);
    }
    input:valid{
        border: 0.1rem solid var(--grey000);
    }



    button{
        height: 4.8rem;
        border-radius: 0.4rem;
        color: var(--grey000);
        background-color: var(--color-primary-negative);
        transition: 0.5s;
        font-size: 1.6rem;
    }

    button:hover{
            cursor: pointer;
            background-color: var(--color-primary-focus);
        }


    .call{
        text-align: center;
        padding: 2.0rem 0;
    }

    a{
        color: var(--grey000);
        background-color: var(--grey100);
        font-size: 1.6rem;
        height: 4.8rem;
        border-radius: 0.4rem;
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a:hover{
        cursor: pointer;
        background-color: var(--grey200);
    }
`