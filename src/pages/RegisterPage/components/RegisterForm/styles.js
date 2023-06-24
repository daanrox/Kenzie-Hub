import styled from 'styled-components';
import arrowImage from '../../../../assets/select-arrow.png'

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
    
    input, select{
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
    
    input:focus, select:focus{
        border: 0.1rem solid var(--grey000);
    }
    input:invalid, select:invalid{
        border: 0.1rem solid var(--grey200);
    }
    input:valid, select:valid{
        border: 0.1rem solid var(--grey000);
    }





    select{
        color: var(--grey100);
        border-radius: 0.4rem;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url(${arrowImage});
        background-position: 96% center;
        background-repeat: no-repeat;
        background-size: 1.2rem;
  

        option{
            color: var(--grey100);
            height: 4.8rem;
            line-height: 4.8rem;
        }
    }

    button{
        height: 4.8rem;
        border-radius: 0.4rem;
        color: var(--grey000);
        background-color: var(--color-primary-negative);
        transition: 0.5s;
        font-size: 1.6rem
    }

    button:hover{
            cursor: pointer;
            background-color: var(--color-primary-focus);
        }
`