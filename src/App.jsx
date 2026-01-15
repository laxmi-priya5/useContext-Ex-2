import { useState , useContext} from 'react'
import Profile from './Components/Profile';
import './App.css'
import { CurrentUserContext } from "./hooks/currentUserContext";
import LoginButton from './Components/LoginButton';

function App() {
  const [user, setUser] = useState(null);


  return (
    <>
    <CurrentUserContext.Provider value={{ user , setUser }}>
      <Profile />
      <LoginButton/>
    </CurrentUserContext.Provider>
   
        
    </>
  )
}


export default App
