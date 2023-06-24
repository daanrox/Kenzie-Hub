import { StyledLoading } from './style'
import loading from '../../assets/loading.gif'
export const LoadingGlobal = () =>{
    return (
        <>
            <StyledLoading>
                <img src={loading}/>
            </StyledLoading>
        </>
    )
}