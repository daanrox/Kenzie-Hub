import { Headline, Title1 } from '../../../styles/tipography'
import { StyledLineBreaker } from '../style'
import { StyledProfileContainer } from './style'


export const Profile = ({name, course_module}) =>{

    return(
        <>
            <StyledProfileContainer>
            <Title1>Olá, {name}</Title1>
            <Headline>{course_module}</Headline>
            </StyledProfileContainer>
            <StyledLineBreaker/>
        </>
    )
}