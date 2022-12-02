import { useState } from "react"
import { Routes } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ?
        <>
        <h1>No Page here</h1>
        </>
        :
        <AuthPage />
      }
    </main>
  ); 
}

export default App;
