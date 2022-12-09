import { useParams } from "react-router-dom";
import { useState} from "react"
import ItemForm from "../../components/ItemForm/ItemForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm"

export default function CategoryDetailPage({ categories, setCategories }) {
    const [currentCategory, setCurrentCategory] = useState(useParams().categoryType)
    const index = categories.findIndex(c => c.name === currentCategory)

    return (
        <>
            <div className="text-center">
                <h2>Here's a look at our {currentCategory} Products/Services</h2>
            </div>
            <br></br>
            {categories[index] !== undefined ?
                <>
                    {categories[index].items.map((item, i) => (
                        <UpdateForm 
                        startValue={item.name} 
                        currentCategory={currentCategory}
                        setCategories={setCategories}
                        key={i}
                        />                
                        ))
                    }
                </>
                        :
                        <h1>Whoops! It broke...</h1>
            }
            <ItemForm 
            categories={categories} 
            currentCategory={currentCategory}
            setCategories={setCategories}
            />
        </>
    )
}