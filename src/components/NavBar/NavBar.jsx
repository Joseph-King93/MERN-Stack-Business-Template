// NavBar.jsx
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar({ user, setUser }) {

    function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
    }

    return (
    <Navbar expand="md" collapseOnSelect bg="dark" variant="dark" >
        <Container>
            <Navbar.Brand >Your Business Here</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ">
                    <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={Link} to="/orders/new">New Order</Nav.Link>
                    <Navbar.Text>                       
                        <strong>Hello, {user.name} </strong> 
                    </Navbar.Text>
                    <Nav.Link as={Link} to="" onClick={handleLogOut}>Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
