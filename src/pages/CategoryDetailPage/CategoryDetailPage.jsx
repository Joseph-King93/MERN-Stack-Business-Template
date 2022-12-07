import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";

export default function CategoryDetailPage({ categories }) {
    let currentCategory = useParams().categoryType
    let items = []

    console.log(currentCategory)
    console.log(categories)
    const index = categories.findIndex(c => c.name == currentCategory)
    console.log(index)
    console.log(categories[index])
    console.log(categories[index].items)
    // items = categories[index].items.forEach(element => {
    //     items.push(element)
    // });
    console.log(items)
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
            <ItemForm categories={categories} currentCategory={currentCategory} />
        </>
    )
}