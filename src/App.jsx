import { useContext, useEffect } from 'react'
import { LoadingGlobal } from './components/LoadingGlobal'
import { UserContext } from './providers/UserContext'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyled } from './styles/globalStyles'
import Modal from 'react-modal'
import { TechContext } from './providers/TechContext'
import { ModalStyled } from './styles/modalStyles'
import { ModalAddTech } from './components/Modals/ModalAddTech'
import { ToastContainer } from 'react-toastify'
import { ModalEditTech } from './components/Modals/ModalEditTech'

Modal.setAppElement('#root')

function App() {

  const { isLoading } = useContext(UserContext)
  const { modalAddIsOpen, closeCreateTech, modalEditIsOpen, closeEditTech } = useContext(TechContext)



  return (
    <>
      <GlobalStyled />
      <ModalStyled />
      {isLoading ? <LoadingGlobal/> : <RoutesMain />} 
      <Modal isOpen={modalAddIsOpen} onRequestClose={closeCreateTech} contentLabel='' overlayClassName='modal-overlay' className='add-modal-content'>
        <ModalAddTech/> 
      </Modal>
      <Modal isOpen={modalEditIsOpen} onRequestClose={closeEditTech} contentLabel='' overlayClassName='modal-overlay' className='edit-modal-content'>
        <ModalEditTech/> 
      </Modal>

      <ToastContainer theme='dark'/>
    </>
  )
}

export default App
