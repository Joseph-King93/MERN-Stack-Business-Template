import { useState } from 'react';
import { Link } from 'react-router-dom'
import * as categoriesAPI from '../../utilities/categories-api';
import * as itemsAPI from '../../utilities/items-api'
import { getAllCategories } from '../../utilities/categories-api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
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
                    <Card.Header className="p-2">
                        <Nav className="justify-content-center ">
                            <Nav.Item className='h4 my-0'>
                                {startValue.startValue ?
                                <Nav.Link as={Link} to={startValue.startValue.replace(/\s/g,'-')}>{startValue.startValue}</Nav.Link>
                                : "No items"
                                 }
                                </Nav.Item>
                        </Nav>
                    <Button variant="outline-dark" size="sm" className="float-end my-0" onClick={handleUpdate}>Edit</Button>
                    </Card.Header>
                    <br></br>
                    <Card.Text>
                        Some information about items/services your Business offers.
                        <br></br> 
                        <br></br> 
                        Maybe include some other relevant information a customer might want to know about this category.
                    </Card.Text>
                </Card>
            :
                <Card style={{ width: "40%" }}>
                    <Card.Header >

                            <Form autoComplete="off" onSubmit={handleSubmit}>
                                <Form.Control type="string" name="name" value={formInput.name} onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    Input new name of Category/Service Above
                                </Form.Text>

                                <br></br>
                                <Button variant="outline-warning" size="sm" onClick={handleUpdate}>Cancel</Button>
                                <Button variant="outline-danger" size="sm" type="submit">Submit Update</Button>
                            </Form>

                    </Card.Header>
                    <br></br>
                    Some information about this category of items/services your Business offers
                </Card>
            }
            <p className="error-message">&nbsp;{error}</p>
        </>
    );
}