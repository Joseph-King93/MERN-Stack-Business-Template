import { useState } from 'react';
import { Link } from 'react-router-dom'
import * as categoriesAPI from '../../utilities/categories-api';
import * as itemsAPI from '../../utilities/items-api'
import { getAllCategories } from '../../utilities/categories-api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


export default function UpdateForm(startValue, currentCategory, setCategories) {
    // console.log("this is UpdateForm")
    // console.log(startValue)
    // console.log(startValue.startValue)
    // console.log(startValue.currentCategory)
    // console.log("this is currentCategory", startValue.currentCategory)

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
        // evt.preventDefault()
        try {
            const formData = (formInput)
            console.log("updateForm submit click")
            console.log(startValue.currentCategory)
            console.log(startValue.currentCategory == undefined)
            if (startValue.currentCategory == undefined) {
                console.log("testt was true!? run cat")
                const updateDone = await categoriesAPI.updateCategory(formData, startValue)
                console.log(updateDone)
                // const allCategories = await getAllCategories();
                // console.log(allCategories);
                // setCategories(allCategories)
            } else {
                console.log("testt was false?! run item")
                const updateDone = await itemsAPI.updateItem(formData, currentCategory, startValue)
                console.log("this is updateItemDone", updateDone)
                // const allCategories = await getAllCategories();
                // console.log(allCategories)
                // setCategories(allCategories);
                
                // console.log(updateDone)
            }
            const allCategories = await getAllCategories();
            // console.log(allCategories);
            // setCategories(allCategories)
        } catch {
            console.log(error)
            setError('Error Making Update - Try Again');
        }
    }


    return (
        <>
            {clicked ?
                <Card style={{ width: "40%" }}>
                    <Card.Header >
                        <Nav className="justify-content-center">
                            <Nav.Item as="h4">
                                <Nav.Link href={startValue.startValue.replace(/\s/g,'-')}>{startValue.startValue}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Button variant="outline-dark" size="sm" onClick={handleUpdate}>Edit</Button>
                    </Card.Header>
                    <br></br>
                    Some information about this category of items/services your Business offers
                </Card>
            :
                <Card style={{ width: "40%" }}>
                    <Card.Header >
                        <div className="form-container">
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <input type="string" name="name" value={formInput.name} onChange={handleChange} />
                                <br></br>
                                <Button variant="outline-warning" size="sm" onClick={handleUpdate}>Cancel</Button>
                                <Button variant="outline-danger" size="sm" type="submit">Submit Update</Button>
                            </form>
                        </div>
                    </Card.Header>
                    <br></br>
                    Some information about this category of items/services your Business offers
                </Card>
            }
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
}