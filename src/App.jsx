import { useState , useContext} from 'react'

import './App.css'
import { CurrentUserContext } from "./currentUserContext";

function App() {
  

  return (
    <>
    <CurrentUserContext.Provider value={{ name: "Laxmipriya" }}>
      <Profile />
    </CurrentUserContext.Provider>
   
        
    </>
  )
}
function Profile() {
  const user = useContext(CurrentUserContext);
  return <p>Welcome, {user.name}!</p>;
}

export default App
