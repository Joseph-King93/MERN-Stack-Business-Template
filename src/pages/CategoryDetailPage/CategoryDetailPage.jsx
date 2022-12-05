import { useParams } from "react-router-dom";

export default function CategoryDetailPage ({ categories }) {
    let currentCategory = useParams().category

    console.log(currentCategory)
    console.log(categories)
    const index = categories.findIndex(c => c.name == currentCategory)
    console.log(index)

    return (
        <>
        "this is CategoryDetailPage"
        <br></br>
        {categories[index].items.map(item => 
            <p>
                {item.name}
            </p>       
        )
    }
    </>
)}