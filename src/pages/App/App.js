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
  console.log(categories)

  // useEffect(function() {
  //   console.log("this works")
  //   categories.then(results => setCategories(results)
  //   .then(console.log(categories)))
  // },[])

  useEffect(function() {
    async function getCategories() {
      const items = await getAllCategories();

      setCategories(items);

    }
    getCategories();
  }, [])

  // printCategory()
console.log(categories)
console.log(categories[0])
console.log(categories[0])
  return (
    <main className="App">
      
      { user ?
            <>
            <NavBar user={user}/>
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/categories" element={<CategoriesPage categories={categories} />} />
              <Route path="/categories/:category" element={<CategoryDetailPage categories={categories}/>} />
            </Routes>
          </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  ); 
}

export default App;
