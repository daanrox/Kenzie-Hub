import styled from 'styled-components';
import arrowImage from '../../../assets/select-arrow.png'

export const StyledEditTechHeader = styled.div`
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
export const StyledEditTechContent = styled.div`
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
            &:disabled{
                color: var(--grey100);
            }
        }

        &>input, &>select, &>button {
            height: 4.8rem;
            border-radius: 0.4rem;
        }  

        &>div{
            display: flex;
            justify-content: space-between;
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

       button{
            height: 4.8rem;
            border-radius: 0.4rem;
            font-weight: 500;
            width: 20.4rem;
            color: var(--grey000);
       }

       .saveTech{
        background-color: var(--color-primary);
       }
       .saveTech:hover{
        cursor: pointer;
        background-color: var(--color-primary-focus);
       }

       .deleteTech{
            background-color: var(--grey100);
            width: 9.8rem;
       }
       .deleteTech:hover{
            cursor: pointer;
            background-color: var(--grey200);
       }
    }
    
`