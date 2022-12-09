import { useState } from 'react';
import * as itemsAPI from '../../utilities/items-api.js';
import * as categoriesAPI from '../../utilities/categories-api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function ItemForm({currentCategory, setCategories}) {
    const [item, setItem] = useState({
        name: ''
    });
    const [deleteItem, setDeleteItem] = useState({
        name: '',
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setItem({ ...item, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const formData = (item)
            const newItem = await itemsAPI.addItem(formData, currentCategory)
            const allCategories = await categoriesAPI.getAllCategories();
            setCategories(allCategories);
        } catch {
            console.log(error)
            setError('Error Creating New Item - Try Again');
        }
    }

    function handleDeleteChange(evt) {
        setDeleteItem({ ...deleteItem, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleDeleteSubmit(evt) {
        evt.preventDefault();
        try {
            const formData = (deleteItem)
            const deleteItemDone = await itemsAPI.deleteItem(formData, currentCategory)
            const allCategories = await categoriesAPI.getAllCategories();
            setCategories(allCategories);
        } catch {
            console.log(error)
            setError('Error Deleting Item - Try Again');
        }
    }

    return (
        <>
            <>
                <Card style={{ width: "60%", margin: "0 auto" }} className="p-2">
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className='h5'>Item: </Form.Label>
                        <Form.Control type="string" name="name" value={item.name} placeholder="Add new Item/Service in this Category" onChange={handleChange} required />
                    </Form.Group>
                    <br></br>
                    <Button variant="outline-secondary" className="float-end" size="sm" type="submit">Add Item</Button>
                </Form>
                </Card>
                </>
                <br></br>
                <>
                <Card style={{ width: "60%", margin: "0 auto" }} className="p-2">
                    <Form autoComplete="off" onSubmit={handleDeleteSubmit}>
                        <Form.Group>
                            <Form.Label className='h5'>Item: </Form.Label>
                            <Form.Control type="string" name="name" value={deleteItem.name} placeholder="Are you sure you want to Delete?" onChange={handleDeleteChange} required />
                        </Form.Group>
                        <br></br>
                            <Button variant="outline-danger" className="float-end" size="sm" type="submit">Delete Item<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                            </Button>
                    </Form>
                </Card>
            </>
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
}