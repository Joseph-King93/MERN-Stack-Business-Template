import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ItemForm from "../../components/ItemForm/ItemForm";
import UpdateForm from "../../components/UpdateForm/UpdateForm"

export default function CategoryDetailPage({ categories }) {
    // console.log("this is catDetailPage")
    // console.log(useParams().categoryType)
    let currentCategory = useParams().categoryType
    // console.log("this is currCat in catDetPage", currentCategory)
    

    // const [paramsTest, setparamsTest] = useState(useParams().categoryType)


    
    // console.log("this is paramsTest", paramsTest)
    // console.log(paramsTest)
    // console.log(paramsTest ==! undefined)

    
    const [testing, setTesting] = useState([])
    console.log("this is testing start", testing)

    // console.log(currentCategory)
    // console.log(categories)
    const index = categories.findIndex(c => c.name === currentCategory)
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
    // console.log('this is testing')
    // console.log(testing)

    return (
        <>
            "this is CategoryDetailPage"
            <br></br>
            {categories[index].items.map((item, i) => (
                    <UpdateForm 
                    startValue={item.name} 
                    currentCategory={currentCategory}
                    key={i}
                    />                
                ))
            }

            <ItemForm categories={categories} currentCategory={currentCategory} setTesting={setTesting} testing={testing}/>
        </>
    )
}