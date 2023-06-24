import { Headline, Title1 } from '../../../styles/tipography'
import { StyledEditTechContent, StyledEditTechHeader } from './styles'
import closeIcon from '../../../assets/close.png'
import { useContext } from 'react'
import { TechContext } from '../../../providers/TechContext'
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { editTechSchema } from './editTechSchema'

export  const ModalEditTech = () =>{

    const {currentEdit, editTech, closeEditTech, modalEditIsOpen, setList, deleteTech} = useContext(TechContext)

    const { register , handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editTechSchema)
    });

    
    const submit = (data) =>{ 
        editTech(currentEdit.id, data)
        closeEditTech()
    }

   


    const excludeTech = (e) =>{
        e.preventDefault()
        deleteTech(currentEdit.id)

    }

    return(
        <>
            <StyledEditTechHeader>
                <Title1>Tecnologia Detalhes</Title1>
                <img src={closeIcon} onClick={closeEditTech}/>
            </StyledEditTechHeader>
            <StyledEditTechContent>
                <form  onSubmit = {handleSubmit(submit)} noValidate>
                    <label>Nome</label>
                    <input type='text' value={modalEditIsOpen ? currentEdit.title : ''} disabled/>

                    <label>Status</label>
                    <select {...register('status')} defaultValue={modalEditIsOpen ? currentEdit.status : ''}>
                        <option value='Iniciante'>Iniciante</option>
                        <option value='Intermediário'>Intermediário</option>
                        <option value ='Avançado'>Avançado</option>
                    </select>
                    <Headline className='warning' color='red'>{errors.status?.message}</Headline>
                    <div>
                        <button type='submit' className='saveTech'>Salvar alterações</button>
                        <button className='deleteTech' onClick={excludeTech}>Excluir</button>
                    </div>
                </form>
            </StyledEditTechContent>
        </>
    )
}