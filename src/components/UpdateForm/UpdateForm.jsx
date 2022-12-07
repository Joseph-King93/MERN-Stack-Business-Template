import { useState } from 'react';
import { Link } from 'react-router-dom'
import * as categoriesAPI from '../../utilities/categories-api';
import * as itemsAPI from '../../utilities/items-api'

export default function UpdateForm(startValue, currentCategory) {
    // console.log("this is UpdateForm")
    // console.log(startValue)
    // console.log(startValue.startValue)
    // console.log("this is currentCategory", currentCategory)


 

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
        evt.preventDefault();
        try {
            const formData = (formInput)
            console.log("wow submit click")
            if (currentCategory ==! undefined) {
                console.log("testt was true!?")
                const updateDone = await categoriesAPI.updateCategory(formData, startValue)
                console.log(updateDone)
            } else {
                console.log("testt was false?!")
                const updateDone = await itemsAPI.updateItem(formData, currentCategory, startValue)
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
                    <button onClick={handleUpdate}>wow</button>
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