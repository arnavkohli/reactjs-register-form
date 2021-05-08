import  React, { Component } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel, Row, HelpBlock, Col}  from "react-bootstrap";
import { Radio, RadioGroup, FormControlLabel, Container } from '@material-ui/core';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from 'shared/validator';
import './register.sass';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateRegisterForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }
        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }
        if (isEmpty(formData.telecom)) {
            errors.telecom = "Contact number can't be blank";
        }
        if (isEmpty(formData.gender)) {
            errors.gender = "Gender number can't be blank";
        }
        if (isEmpty(formData.birthdate)) {
            errors.birthdate = "Birthdate can't be blank";
        }
        if (isEmpty(formData.contact)) {
            errors.contact = "Contact type can't be blank";
        }
        if (isEmpty(formData.contact_name)) {
            errors.contact_name = "Contact name can't be blank";
        }  

        if (isEmpty(formData.relationship)) {
            errors.relationship = "Relationship can't be blank";
        }
        if (isEmpty(formData.organization)) {
            errors.organization = "Organisation can't be blank";
        }
        if (isEmpty(formData.period)) {
            errors.period = "Period can't be blank";
        }




        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    register = (e) => {

        e.preventDefault();

        let errors = this.validateRegisterForm();

        if(errors === true){
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Register">
                <Row>
                    <h1>Register </h1>
                    <form onSubmit={this.register}>
                        <Row>
                            <Col xs="6">
                                <FormGroup controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                                { errors.email &&
                                    <HelpBlock>{errors.email}</HelpBlock>
                                }
                                </FormGroup>
                                <FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                                { errors.password &&
                                    <HelpBlock>{errors.password}</HelpBlock>
                                }
                                </FormGroup>

                                <FormGroup controlId="telecom" validationState={ formSubmitted ? (errors.telecom ? 'error' : 'success') : null }>
                                    <ControlLabel>Contact Number</ControlLabel>
                                    <FormControl type="number" name="password" placeholder="Enter your contact number" onChange={this.handleInputChange} />
                                { errors.telecom &&
                                    <HelpBlock>{errors.telecom}</HelpBlock>
                                }
                                </FormGroup>

                                <FormGroup controlId="gender" validationState={ formSubmitted ? (errors.gender ? 'error' : 'success') : null }>
                                <ControlLabel>Gender</ControlLabel>
                                  <RadioGroup aria-label="gender" name="gender1" onChange={this.handleInputChange} row>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                  </RadioGroup>
                                  { errors.gender &&
                                    <HelpBlock>{errors.gender}</HelpBlock>
                                  } 
                                </FormGroup>

                                <FormGroup controlId="birthdate" validationState={ formSubmitted ? (errors.birthdate ? 'error' : 'success') : null }>
                                    <ControlLabel>Birthdate</ControlLabel>
                                    <FormControl type="date" name="birthdate" placeholder="Enter your birthdate" onChange={this.handleInputChange} />
                                { errors.birthdate &&
                                    <HelpBlock>{errors.birthdate}</HelpBlock>
                                }
                                </FormGroup>

                                <FormGroup controlId="language" validationState={ formSubmitted ? (errors.language ? 'error' : 'success') : null }>
                                    <ControlLabel>Primary Language</ControlLabel>
                                    <FormControl type="text" name="language" placeholder="Enter your primary language" onChange={this.handleInputChange} />
                                { errors.language &&
                                    <HelpBlock>{errors.language}</HelpBlock>
                                }
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup controlId="contact" validationState={ formSubmitted ? (errors.contact ? 'error' : 'success') : null }>
                                <ControlLabel>Contact Type</ControlLabel>
                                <FormControl type="text" name="contact" placeholder="Enter your contact referall" onChange={this.handleInputChange} />
                                { errors.contact &&
                                    <HelpBlock>{errors.contact}</HelpBlock>
                                }
                                </FormGroup>

                                <FormGroup controlId="contact_name" validationState={ formSubmitted ? (errors.contact_name ? 'error' : 'success') : null }>
                                    <ControlLabel>Contacts Name</ControlLabel>
                                    <FormControl type="text" name="contact_name" placeholder="Enter your contact's name" onChange={this.handleInputChange} />
                                { errors.contact_name &&
                                    <HelpBlock>{errors.contact_name}</HelpBlock>
                                }
                                </FormGroup>

                                <FormGroup controlId="relationship" validationState={ formSubmitted ? (errors.relationship ? 'error' : 'success') : null }>
                                    <ControlLabel>Relationship</ControlLabel>
                                    <FormControl type="text" name="relationship" placeholder="Enter your relationship" onChange={this.handleInputChange} />
                                { errors.relationship &&
                                    <HelpBlock>{errors.relationship}</HelpBlock>
                                }
                                </FormGroup>


                                <FormGroup controlId="organization" validationState={ formSubmitted ? (errors.organization ? 'error' : 'success') : null }>
                                    <ControlLabel>Organisation</ControlLabel>
                                    <FormControl type="text" name="organization" placeholder="Enter your organization" onChange={this.handleInputChange} />
                                { errors.organization &&
                                    <HelpBlock>{errors.organization}</HelpBlock>
                                }
                                </FormGroup>

                                <FormGroup controlId="period" validationState={ formSubmitted ? (errors.period ? 'error' : 'success') : null }>
                                    <ControlLabel>Period (years)</ControlLabel>
                                    <FormControl type="number" name="period" placeholder="Enter your period" onChange={this.handleInputChange} />
                                { errors.period &&
                                    <HelpBlock>{errors.period}</HelpBlock>
                                }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Button type="submit" bsStyle="primary">Register</Button>
                        </Row>
                    </form>
                </Row>
            </div>
        )
    }
}

export default Register;