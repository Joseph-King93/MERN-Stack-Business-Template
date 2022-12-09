import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
    email: '',
    password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div style={{ width: "60%", margin: "0 auto" }}>

                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={credentials.email} placeholder="Enter Email" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={credentials.password} placeholder="Password" onChange={handleChange} required />
                    </Form.Group>


                    <br></br>
                    <Button type="submit">LOG IN</Button>
                </Form>

            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}