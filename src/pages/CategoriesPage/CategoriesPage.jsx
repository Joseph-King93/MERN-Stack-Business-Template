// CategoriesPage.jsx

import CategoryItems from "../../components/CategoryItems/CategoryItems";
import { checkToken } from "../../utilities/users-service";
import { Link } from 'react-router-dom'
import CategoryForm from "../../components/CategoryForm/CategoryForm";

export default function CategoriesPage({categories}) {

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }


    return (
        <>
            <h1>CategoriesPage</h1>
            {categories[0].items[0].name}
            <br></br>
            {categories.map(cat => 
                    <p>
                    <Link to={cat.name.replace(/\s/g,'-')}>{cat.name}</Link>
                    </p>
                )}
            <br></br>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
            <CategoryForm categories={categories} />
        </>
    );
}