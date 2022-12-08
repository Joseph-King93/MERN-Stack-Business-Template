import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import CategoryDetailPage from "../CategoryDetailPage/CategoryDetailPage";
import { getAllCategories } from "../../utilities/categories-api";
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([]);

  useEffect(function() {
    async function getCategories() {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
    }
    getCategories();
  }, [])

  // console.log(categories)

  return (
    <main className="App">
      
      { user ?
            <>
            <NavBar user={user}/>
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/categories" element={<CategoriesPage categories={categories} setCategories={setCategories} />} />
              <Route path="/categories/:categoryType" element={<CategoryDetailPage categories={categories} setCategories={setCategories} />} />
            </Routes>
          </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  ); 
}

export default App;
