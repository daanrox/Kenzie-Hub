import { Headline, Title1 } from '../../../../styles/tipography'
import { api } from '../../../../services/api'
import { useNavigate,  Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { loginUserSchema } from './loginUserSchema'
import { StyledForm } from './style'
import { useContext } from 'react'
import { UserContext } from '../../../../providers/UserContext'

export const LoginForm = () =>{

const { register , handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginUserSchema)
});

const  { submit } = useContext(UserContext)


    return (
        <StyledForm onSubmit = {handleSubmit(submit)} noValidate>
                <div className='headerContainer'>
                <Title1>Login</Title1>
                </div>

                <label>Email</label>
                <input type='email' {...register('email')} placeholder='Digite aqui seu email' autoComplete='off' required/>
                <Headline className='warning' color='red'>{errors.email?.message}</Headline>

                <label>Senha</label>
                <input type='password'  {...register('password')} autoComplete='off' placeholder='Digite aqui sua senha'required />
                <Headline className='warning' color='red'>{errors.password?.message}</Headline>

                <button type='submit'>Entrar</button>

                <Headline className='call'> Ainda não possui uma conta?</Headline>

                <Link to='/register'> Cadastre-se</Link>
            </StyledForm>
    )
}