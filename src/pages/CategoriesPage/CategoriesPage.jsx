// CategoriesPage.jsx

import { checkToken } from "../../utilities/users-service";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import Button from "react-bootstrap/Button";

export default function CategoriesPage({categories, setCategories}) {
    // const [clicked, setClicked] = useState(true)

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }

    // async function handleUpdate() {
    //     // const expDate = await checkToken();
    //     if (clicked) {
    //         setClicked(false)
    //         console.log("wow click");
    //     } else {
    //         setClicked(true)
    //         console.log("another click wow")
    //     }
    // }

    return (
        <>
            <div className="text-center">
                <h2>Take a Look at Our Products/Services Categories</h2>
            </div>
                <br></br>
                {categories.map((cat, i) => (
                        <UpdateForm 
                        key={i}
                        startValue={cat.name}
                        categories={categories}
                        setCategories={setCategories} 
                        />
                    ))}
                <br></br>
                <CategoryForm 
                categories={categories} 
                setCategories={setCategories}
                />
                <div className="text-center">

                <Button variant="primary" onClick={handleCheckToken}>Check When My Login Expires</Button>
                </div>
        </>
    );
}