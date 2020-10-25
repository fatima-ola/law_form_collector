import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class UserForm extends Component {
    state = {
        name: '',
        age: null,
        essay: '',
        stack: 'React'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.addProgrammer(this.state)
    }



    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='12' md='12' lg='12'>
                            <h3>Programmer's Form</h3>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" name="name" onChange={this.handleChange} required={true} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="age">Age</Label>
                                    <Input type="number" name="age" onChange={this.handleChange} required={true} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="essay" placeholder="tell us about yourself" onChange={this.handleChange} required={true} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input type="select" name="stack" value={this.state.stack} onChange={this.handleChange} required={true} >
                                        <option value="Python">Python</option>
                                        <option value="React">React</option>
                                        <option value="Angular">Angular</option>
                                    </Input>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserForm
