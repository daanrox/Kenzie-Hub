import { Headline, Title1 } from '../../../styles/tipography'
import { StyledAddTechContent, StyledAddTechHeader } from './styles'
import { useContext } from 'react'
import { TechContext } from '../../../providers/TechContext'
import { ButtonForm } from '../../Button'
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { addTechSchema } from './addTechSchema'
import closeIcon from '../../../assets/close.png'

export const ModalAddTech = () =>{

    const {closeCreateTech, addTech} = useContext(TechContext)
    const { register , handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(addTechSchema)
    });

    
    const submit = (data) =>{
        closeCreateTech();
        addTech(data)
    }

    return(
    <>
    <StyledAddTechHeader>
        <Title1>Cadastrar Tecnologia</Title1>
        <img onClick={closeCreateTech} src={closeIcon}/>
    </StyledAddTechHeader>
    <StyledAddTechContent>
        <form onSubmit = {handleSubmit(submit)} noValidate>
            <label>Nome</label>
            <input type='text' {...register('title')} placeholder='Nome da Tecnologia' required/>
            <Headline className='warning' color='red'>{errors.title?.message}</Headline>
            <label>Selecionar status</label>
            <select {...register('status')}>
                <option value='Iniciante'>Iniciante</option>
                <option value='Intermediário'>Intermediário</option>
                <option value='Avançado'>Avançado</option>
            </select>
            <Headline className='warning' color='red'>{errors.status?.message}</Headline>


           <ButtonForm>Cadastrar Tecnologia</ButtonForm>

        </form>
    </StyledAddTechContent>
    </>

    )
}