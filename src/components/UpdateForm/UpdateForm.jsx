import { useState } from 'react';
import { Link } from 'react-router-dom'
import * as categoriesAPI from '../../utilities/categories-api';
import * as itemsAPI from '../../utilities/items-api'
import { getAllCategories } from '../../utilities/categories-api';

export default function UpdateForm(startValue, currentCategory, setCategories) {
    console.log("this is UpdateForm")
    console.log(startValue)
    console.log(startValue.startValue)
    console.log(startValue.currentCategory)
    console.log("this is currentCategory", startValue.currentCategory)

    const [clicked, setClicked] = useState(true)
    const [formInput, setFormInput] = useState({
        name: startValue.startValue
    })
    const [error, setError] = useState('');

    function handleChange(evt) {
        setFormInput({ ...formInput, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleUpdate() {
        if (clicked) {
            setClicked(false)
            console.log("wow click");
        } else {
            setClicked(true)
            console.log("another click wow")
        }
    }

    async function handleSubmit(evt) {
        console.log("updateForm handleSubmit")
        evt.preventDefault();
        try {
            const formData = (formInput)
            console.log("wow submit click")
            console.log(startValue.currentCategory)
            console.log(startValue.currentCategory != undefined)
            if (startValue.currentCategory != undefined) {
                console.log("testt was true!?")
                const updateDone = await categoriesAPI.updateCategory(formData, startValue)
                const allCategories = await getAllCategories();
                setCategories(allCategories);
                setCategories(updateDone)
            } else {
                console.log("testt was false?!")
                const updateDone = await itemsAPI.updateItem(formData, currentCategory, startValue)
                const allCategories = await getAllCategories();
                setCategories(allCategories);
                console.log(updateDone)
            }
        } catch {
            console.log(error)
            setError('Error Making Update - Try Again');
        }
    }


    return (
        <>
            {clicked ?
                <p>
                    <Link to={startValue.startValue.replace(/\s/g,'-')}>{startValue.startValue}</Link>
                    <button onClick={handleUpdate}>not wow</button>
                </p>
            :  
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="string" name="name" value={formInput.name} onChange={handleChange} />
                    <button onClick={handleUpdate}>wow</button>
                    <button type="submit">Submit Update</button>
                </form>
            </div>
            }
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
}