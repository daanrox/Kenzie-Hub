import { StyledButton } from './styles'

export const ButtonForm = ({children, submit}) =>{

    return (
        <>
        <StyledButton submit={submit}>
            {children}
        </StyledButton>
        </>
    )
}