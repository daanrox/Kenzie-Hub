import { Headline, Title1 } from '../../../../styles/tipography'
import { StyledForm } from './styles'
import { api } from '../../../../services/api'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { createUserSchema } from './createUserSchema'
import { toast } from 'react-toastify'

export const RegisterForm = () =>{

const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(createUserSchema)
});

const navigate = useNavigate();

const createUser = async (formData) => {
    try {
        const {data} = await api.post('/users', formData)
        toast.success('Sua conta foi criada com sucesso!')
            setTimeout(() => {
                navigate('/')
            }, 3000)
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

const submit = async (formData) => {
    await createUser(formData)
    reset()
}


    return (
        <StyledForm onSubmit = {handleSubmit(submit)} noValidate>
                <div className='headerContainer'>
                <Title1>Crie sua conta</Title1>
                <Headline>Rápido e grátis, vamos nessa</Headline>
                </div>

                <label>Nome</label>
                <input type='text' {...register('name')} placeholder='Digite aqui seu nome' autoComplete='off' required/>
                <Headline className='warning' color='red'>{errors.name?.message}</Headline>

                <label>Email</label>
                <input type='email' {...register('email')} placeholder='Digite aqui seu email' autoComplete='off' required/>
                <Headline className='warning' color='red'>{errors.email?.message}</Headline>

                <label>Senha</label>
                <input type='password'  {...register('password')} autoComplete='off' placeholder='Digite aqui sua senha'required />
                <Headline className='warning' color='red'>{errors.password?.message}</Headline>

                <label>Confirmar Senha</label>
                <input type='password'  {...register('confirm')} autoComplete='off' placeholder='Digite novamente sua senha' required/>
                <Headline className='warning' color='red'>{errors.confirm?.message}</Headline>

                <label>Bio</label>
                <input type='text' {...register('bio')} placeholder='Fale sobre você' required/>
                <Headline className='warning' color='red'>{errors.bio?.message}</Headline>

                <label>Contato</label>
                <input type='text' {...register('contact')} placeholder='Opção de contato'required />
                <Headline className='warning' color='red'>{errors.contact?.message}</Headline>

                <label>Selecionar módulo</label>
                <select {...register('course_module')} >
                    <option value ='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                    <option value ='Segundo módulo (Frontend Avançado)'>Segundo Módulo</option>
                    <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                    <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
                </select>
                <Headline className='warning' color='red'>{errors.course_module?.message}</Headline>


                <button type='submit'>Cadastrar</button>
            </StyledForm>
    )
}