import { Link } from 'react-router-dom'
import { StyledDashboardHeaderContainer } from './style'
import { StyledLineBreaker } from '../style'
import logo from '../../../assets/Logo.svg'

export const DashboardHeader = ({logout}) =>{



    return (
        <>
            <StyledDashboardHeaderContainer>
                <img src={logo} alt ='Logo Kenzie Hub na cor rosa'/>
                <Link to='/' onClick={logout}>Sair</Link>
            </StyledDashboardHeaderContainer>
            <StyledLineBreaker/>

            

        </>
    )
}