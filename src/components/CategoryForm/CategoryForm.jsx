import { useState } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';

export default function CategoryForm({categories}) {
    const [category, setCategory] = useState({
    name: '',
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCategory({ ...category, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {

        evt.preventDefault();
        console.log("clicked")
        console.log(evt)
        try {
            const formData = evt.target
            console.log(formData)
            console.log(formData[0])
            console.log(formData[0].value)
            const category = await categoriesAPI.addCategory(formData)
        } catch {
            setError('Error Creating New Category - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Category</label>
                    <input type="text" name="name" value={category.name} onChange={handleChange} required />
                    <button type="submit">Add Category</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}