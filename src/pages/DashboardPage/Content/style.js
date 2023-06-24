import { styled } from 'styled-components';


export const StyledContentContainer = styled.div`
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
`

export const StyledContentHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledButtonPlus = styled.button`
    width: 3.348rem;
    height: 3.3rem;
    background-color: var(--grey300);
    color: var(--grey000);
    font-weight: 400;
    font-size: 2.2rem;
    border-radius: 0.4rem;
    transition: 0.5s;

    &:hover{
        cursor: pointer;
        background-color: var(--grey200);
    }
`

export const StyledTechList = styled.div`
    width: 100%;
    background-color: var(--grey300);
    border-radius: 0.4rem;
    display: flex;
    /* height: 100%;
    min-height: 10rem; */
    flex-direction: column;
    align-items: center;
    padding: 2.3rem 2.6rem;
    gap: 1rem;
    
    justify-content: ${({techlist}) => techlist.length > 0 ? 'flex-start' : 'center'};


    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    &>h3{
        color: var(--grey100);
        font-weight: 400;
    }

    &>img{
        width: 3rem;
        align-items: center;
    }
`

export const StyledTechCard = styled.div`
    width: 100%;
    background-color: var(--grey400);
    border-radius: 0.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.9rem;
    padding: 1.3rem 3.2rem;
    transition: 0.5s;

    &:hover{
        background-color: var(--grey200);
        cursor: pointer;

        p{
            color: var(--grey000);
        }
    }
`

export const StyledTechName = styled.p`
    color: var(--grey100);
    text-align: right;
    font-weight: 300;
    font-size: 1.4rem;
`