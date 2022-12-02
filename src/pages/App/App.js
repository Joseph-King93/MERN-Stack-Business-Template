import { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
        <h1>hello, {user.name}</h1>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  ); 
}

export default App;
