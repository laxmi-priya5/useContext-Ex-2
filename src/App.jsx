import { useState } from 'react'

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
  return <p>Profile goes here</p>;
}


export default App
