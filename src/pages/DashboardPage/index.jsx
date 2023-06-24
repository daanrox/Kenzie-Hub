
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { Content } from './Content'
import { DashboardHeader } from './Header'
import { Profile } from './Profile'



export const DashboardPage = () => {

    const { name, course_module, logout } = useContext(UserContext)

   

    return (
        <>
            <DashboardHeader logout={logout} />
            <Profile name={name} course_module={course_module} />
            <Content />
        </>
    )
}