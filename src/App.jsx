import { useState , useContext} from 'react'

import './App.css'
import { CurrentUserContext } from "./currentUserContext";
import LoginButton from './LoginButton';

function App() {
  const [user, setUser] = useState(null);


  return (
    <>
    <CurrentUserContext.Provider value={{ name: "Laxmipriya" }}>
      <Profile />
      <LoginButton/>
    </CurrentUserContext.Provider>
   
        
    </>
  )
}
function Profile() {
  const user = useContext(CurrentUserContext);
  return <p>Welcome, {user.name}!</p>;
}

export default App
