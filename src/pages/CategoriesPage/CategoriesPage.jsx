// CategoriesPage.jsx

import { checkToken } from "../../utilities/users-service";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm";

export default function CategoriesPage({categories}) {
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
            <h1>CategoriesPage</h1>
            <br></br>
            {categories.map((cat, i) => (
                    <UpdateForm 
                    key={i}
                    startValue={cat.name} />
                ))}
            <br></br>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
            <CategoryForm categories={categories} />
        </>
    );
}