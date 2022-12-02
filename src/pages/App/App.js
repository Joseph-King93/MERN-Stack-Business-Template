import { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
            <>
            <NavBar user={user}/>
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
            </Routes>
          </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  ); 
}

export default App;
