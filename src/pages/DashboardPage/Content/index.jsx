import { useContext, useEffect } from 'react'
import { TechContext } from '../../../providers/TechContext'
import { Headline, Title1, Title2, Title3 } from '../../../styles/tipography'
import { StyledButtonPlus, StyledContentContainer, StyledContentHeader, StyledTechCard, StyledTechList, StyledTechName } from './style'
import loading from '../../../assets/loading.gif'
import { UserContext } from '../../../providers/UserContext'


export const Content = () =>{

    const { isLoadingList, openCreateTech, openEditTech, modalEditIsOpen} = useContext(TechContext)
    const { user, setUser, techList} = useContext(UserContext)

    const handleCardClick = (id, title, status) => {
        openEditTech(id, title, status);
      };

    return(
        <>
        <StyledContentContainer>
                <StyledContentHeader>
                    <Title1>Tecnologias</Title1>
                    <StyledButtonPlus onClick={openCreateTech}>+</StyledButtonPlus>
                </StyledContentHeader>
                <StyledTechList techlist={techList}>
                    {isLoadingList ? (
                        <img src={loading}/>
                    ) : 
                    techList.length > 0 ? (
                        techList.map(({ id, title, status }) => (
                            <StyledTechCard key={id} id={id} onClick={()=>{ handleCardClick(id, title, status)}}>
                                <div>
                                <Title2>{title}</Title2>
                                <StyledTechName>{status}</StyledTechName>
                                </div>
                            </StyledTechCard>
                        ))
                    ) : (
                        <Title3>Nenhuma tecnologia cadastrada</Title3>
                    )}
                </StyledTechList>
            </StyledContentContainer>
        </>
    )
}