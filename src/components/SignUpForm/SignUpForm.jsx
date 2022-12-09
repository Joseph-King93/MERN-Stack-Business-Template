import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(evt)
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div style={{ width: "60%", margin: "0 auto" }}>

          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label className='h4'>Name</Form.Label>
              <Form.Control type="text" name="name" value={this.state.name} placeholder="Your Name Here" onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group>              
              <Form.Label className='h4'>Email</Form.Label>
              <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group>            
              <Form.Label className='h4'>Password</Form.Label>
              <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} required />
              </Form.Group>
            <Form.Group>              
              <Form.Label className='h4'>Confirm</Form.Label>
              <Form.Control type="password" name="confirm" value={this.state.confirm} placeholder="Confirm Password" onChange={this.handleChange} required />
            </Form.Group>
            <br></br>
            <Button type="submit" disabled={disable}>SIGN UP</Button>
          </Form>

        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}