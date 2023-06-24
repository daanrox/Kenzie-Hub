import styled from 'styled-components';
import arrowImage from '../../../assets/select-arrow.png'

export const StyledAddTechHeader = styled.div`
    background-color: var(--grey200);
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    border-radius: 0.4rem 0.4rem 0 0 ;


    &>img{
        height: 1.6rem;
        cursor: pointer;
        transition: 0.5s;

    }

    img:hover{
        transform: scale(1.1);
    }
`
export const StyledAddTechContent = styled.div`
    background-color: var(--grey300);

    padding: 2rem;
    border-radius: 0.4rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        &>label{
            font-size: 1.25rem;
        }

        &>input, &>select{
            padding-left: 1rem;
            border: 0.2rem solid var(--grey200);
            background-color: var(--grey200);
            color: var(--grey000);
            
            &:valid{
                border: 0.2rem solid var(--grey100);
            }
        }

        &>input, &>select, &>button {
            height: 4.8rem;
            border-radius: 0.4rem;
        }  

        &>select{
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url(${arrowImage}); 
            background-position: 96% center;
            background-repeat: no-repeat;
            background-size: 1.2rem; 
        }

       
    }
    
`