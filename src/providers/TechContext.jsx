import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';



export const TechContext = createContext({});



export const TechProvider = ({children}) =>{

    const [isLoadingList, setLoadingList] = useState(false)
    const [modalAddIsOpen, setAddIsOpen] = useState(false)
    const [modalEditIsOpen, setEditIsOpen] = useState(false)
    
    const [currentEdit, setCurrentEdit] = useState(null)
    const { course_module} = useContext(UserContext)
    const { user, setUser, techList, setList } = useContext(UserContext)

    
    useEffect(()=>{
        user ? setList(user.techs): null
    }, [user])

    

    const openCreateTech = () =>{
        setAddIsOpen(true)
    }

    const closeCreateTech = () =>{
        setAddIsOpen(false)
    }

    const openEditTech = (id, title, status) =>{
        setEditIsOpen(true)
        setCurrentEdit({id:id, title: title, status: status})
    }

    const closeEditTech = () =>{
        setEditIsOpen(false)
        setCurrentEdit(null)
    }


    const addTech = async(data) =>{
        const token = localStorage.getItem('@kenziehub:token')
        try {
            setLoadingList(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.post("/users/techs", data)
            setList([...techList, response.data])
            toast.success('Tecnologia adicionada com sucesso!')


        } catch (error) {
            console.log(error)
            toast.error('Não foi possível adicionar tecnologia')

        }finally{
            setLoadingList(false)
        }
    }


    const deleteTech = async(id) => {

        const token = localStorage.getItem('@kenziehub:token')
        try {
            setEditIsOpen(false)
            setLoadingList(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.delete(`/users/techs/${id}`)
            const updatedList = techList ? techList.filter((tech) => tech.id !== id) : []
            setList(updatedList)
            setLoadingList(false)
            toast.success('Tecnologia excluída com sucesso!')

        } catch (error) {
            console.log(error)
            toast.error('Ops! Algo deu errado')
        } finally{
            setLoadingList(false)

        }


    }



    const editTech = async(id, body) => {

        const token = localStorage.getItem('@kenziehub:token')
        try {
            setEditIsOpen(false)
            setLoadingList(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.put(`/users/techs/${id}`, body)
            const updatedList = techList ? techList.map((tech) => tech.id == response.data.id ? response.data : tech ) : []
            setList(updatedList)
            
            toast.success('Tecnologia editada com sucesso!')
            setLoadingList(false)
        } catch (error) {
            console.log(error)
            toast.error('Ops! Algo deu errado')
        } finally{
            setLoadingList(false)
        }


    }


    return(
        <TechContext.Provider value={{isLoadingList, modalAddIsOpen, setAddIsOpen, openCreateTech, closeCreateTech, 
        addTech, openEditTech, closeEditTech, modalEditIsOpen, currentEdit, editTech, deleteTech,}}>
            {children}
        </TechContext.Provider>
    )
}