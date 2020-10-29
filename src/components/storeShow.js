import React, { Component } from 'react'
import UserForm from './userform';
import { Table, Row, Container, FormGroup, Label, Input } from 'reactstrap'
import Output from './output'
import SmallScreen from './smallScreen'

class StoreShow extends Component {
    state = {
        programmers: [],
        stack: 'React'
    }

    addProgrammer = (programmer) => {
        programmer.id = Math.floor(Math.random() * 101)
        let newProgrammerList = [...this.state.programmers, programmer]
        this.setState({
            programmers: newProgrammerList,
        })
        console.log(newProgrammerList)
    }

    deleteProgrammer = (id) => {
        const remainingProgrammer = this.state.programmers.filter((programmer) => {
            return programmer.id !== id
        })
        this.setState({
            programmers: remainingProgrammer
        })
    }

    render() {
        return (
            <div>
                <UserForm addProgrammer={this.addProgrammer} />
                <Container style={{ marginTop: '50px' }}>
                    <Row className=' large'>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Essay</th>
                                    <th>Stack</th>
                                </tr>
                            </thead>
                            <Output programmers={this.state.programmers} deleteProgrammer={this.deleteProgrammer} />
                        </Table>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="stack" value={this.state.stack} onChange={this.handleChange} required={true} >
                                <option value="Python">Python</option>
                                <option value="React">React</option>
                                <option value="Angular">Angular</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <div className='row small'>
                        <SmallScreen programmers={this.state.programmers} deleteProgrammer={this.deleteProgrammer} />
                    </div>
                </Container>
            </div>
        )
    }
}

export default StoreShow

