import { Navigate, Outlet, useLocation } from 'react-router-dom'


export const ProtectedRoutes = () =>{

    const token = localStorage.getItem('@kenziehub:token')


    return  token ? <Outlet /> : <Navigate to='/' /> 

}