import { createContext, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api'
import { useState, useEffect } from 'react'


export const UserContext = createContext({});


export const UserProvider = ({ children }) => {
    const [techList, setList] = useState([])
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [courseModule, setCourseModule] = useState('');
    const navigate = useNavigate();

  
    const createLogin = async (formData) => {
      try {
        setIsLoading(true);
  
        const { data } = await api.post('/sessions', formData);
        toast.success('Login realizado com sucesso!');
  
        setUser(data.user);
        setName(data.user.name);
        setCourseModule(data.user.course_module);

        setList(data.user.techs)

        localStorage.setItem('@kenziehub:token', data.token);
        localStorage.setItem('@kenziehub:user', data.user.id);

        navigate(`/dashboard`);
  
      } catch (error) {
        toast.error('Ops! Algo deu errado.');
      } finally {
        setIsLoading(false);
      }
    };
    
    const submit = async (formData) => {
      await createLogin(formData)
    };

  

    useEffect(() => {
      const getUser = async () => {
        const token = localStorage.getItem('@kenziehub:token');
        const userId = localStorage.getItem('@kenziehub:user');
        
        if (token && userId) {
          try {
            console.log('Olá')
            setIsLoading(true);
            const response = await api.get(`/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            
            setUser(response.data);
            setList(response.data.techs)
            setName(response.data.name);
            setCourseModule(response.data.course_module);
            
            

            navigate('/dashboard')
            
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          
        }

      }
    };
    getUser()
    }, []);
  
    
  
  
    const logout = () => {
      localStorage.clear();
      setUser(null);
      setName('');
      setCourseModule('');
      setIsAuthenticated(false)
      setTechList([])
    };
  
    return (
      <UserContext.Provider
        value={{ submit, name, course_module: courseModule, logout, isLoading, user, setUser, techList, setList}}
      >
        {children}
      </UserContext.Provider>
    );
  };