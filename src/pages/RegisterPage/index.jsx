import 'react-toastify/dist/ReactToastify.min.css';
import logo from '../../../src/assets/Logo.svg'
import { RegisterForm } from './components/RegisterForm'
import { ContainerRegister, HeaderRegister } from './style'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom';


export const RegisterPage = () => {


    return (
        <>
        <ContainerRegister>

            <HeaderRegister>
                <img src={logo} alt='Logo Kenzie Hub na cor rosa' />
                <Link to='/'>Voltar</Link>
            </HeaderRegister>

            <RegisterForm />


        </ContainerRegister>
        <ToastContainer theme='dark' toastStyle={{ backgroundColor: 'var(--grey300)' }}/>
        </>
    )
}