import 'react-toastify/dist/ReactToastify.min.css';
import logo from '../../assets/Logo.svg'
import { ToastContainer } from 'react-toastify'
import { ContainerLogin, HeaderLogin } from './style';
import { LoginForm } from './components/LoginForm';


export const LoginPage = () => {


    return (
        <>
        <ContainerLogin>
        <HeaderLogin>
             <img src={logo} alt='Logo Kenzie Hub na cor rosa' />
        </HeaderLogin>
        
        <LoginForm />


        </ContainerLogin>
        <ToastContainer theme='dark' toastStyle={{ backgroundColor: 'var(--grey300)' }}/>
        </>
    )
}