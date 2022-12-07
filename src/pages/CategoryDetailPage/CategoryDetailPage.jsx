import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ItemForm from "../../components/ItemForm/ItemForm";

export default function CategoryDetailPage({ categories }) {
    let currentCategory = useParams().categoryType
    
    const [testing, setTesting] = useState([])
    // console.log(testing)

    // console.log(currentCategory)
    // console.log(categories)
    const index = categories.findIndex(c => c.name == currentCategory)
    // console.log(index)
    // console.log(categories[index])

    useEffect(function() {
        categories[index].items.forEach(element => {
            // console.log('loop inside useEffect')
            // console.log(element)
            // console.log(element.name)
            setTesting(element)
            
            }, [])
        }
    )
    console.log('this is testing')
    console.log(testing)

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
            <ItemForm categories={categories} currentCategory={currentCategory} setTesting={setTesting} testing={testing}/>
        </>
    )
}