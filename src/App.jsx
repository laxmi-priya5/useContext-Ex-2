import { useState , useEffect} from 'react'
import Profile from './Components/Profile';
import './App.css'
import { CurrentUserContext } from "./hooks/currentUserContext";
import LoginButton from './Components/LoginButton';
import Navbar from './Components/Navbar';

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user",JSON.stringify(user))
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);


 

  return (
    <>
    <CurrentUserContext.Provider value={{ user , setUser }}>
      <Navbar/>
      <Profile />
      <LoginButton/>
    </CurrentUserContext.Provider>
   
        
    </>
  )
}


export default App
