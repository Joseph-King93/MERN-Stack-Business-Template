import { useState } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';

export default function CategoryForm({categories, setCategories}) {
    // console.log(categories)
    const [category, setCategory] = useState({
    name: ''
    });
    const [deleteCategory, setDeleteCategory] = useState({
        name: '',
        });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCategory({ ...category, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // console.log({...category})
        evt.preventDefault();
        console.log("clicked")
        // console.log(category)
        try {
            const formData = (category)
            // console.log(formData)
            const newCategory = await categoriesAPI.addCategory(formData)
            console.log(newCategory)
            const allCategories = await categoriesAPI.getAllCategories();
            setCategories(allCategories);
            // setCategories(newCategory)
            console.log(categories)
        } catch {
            console.log(error)
            setError('Error Creating New Category - Try Again');
        }
    }

    function handleDeleteChange(evt) {
        setDeleteCategory({ ...deleteCategory, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleDeleteSubmit(evt) {        
        evt.preventDefault();
        console.log("clicked")
        try {
            console.log("delete is clicked")
            const formData = (deleteCategory)
            // console.log(formData)
            const deleteCategoryDone = await categoriesAPI.deleteCategory(formData)
            const allCategories = await categoriesAPI.getAllCategories();
            setCategories(allCategories);
            // console.log("deleteCategoryDone is finished")
            // console.log(deleteCategoryDone)
        } catch {
            console.log(error)
            setError('Error Deleting Category - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Category: </label>
                    <input type="string" name="name" value={category.name} onChange={handleChange} required />
                    <button type="submit">Add Category</button>
                </form>
            </div>
            <div className="form-container">
            <form autoComplete="off" onSubmit={handleDeleteSubmit}>
                <label>Category: </label>
                <input type="string" name="name" value={deleteCategory.name} onChange={handleDeleteChange} required />
                <button type="submit">Delete Category<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                </button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}