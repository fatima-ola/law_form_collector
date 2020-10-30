import React, { Component } from 'react'
import UserForm from './userform';
import { Table, Row, Container, FormGroup, Label, Input, Button } from 'reactstrap'
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

    changeStack = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    show = () => {
        switch (this.state.stack) {
            case 'React':
                const react = this.state.programmers.filter((programmers) => {
                    return this.state.stack === programmers.stack
                })

                const display1 = react.map(((programmer) => {
                    return (
                        <tr key={programmer.id}>
                            <td>{programmer.id}</td>
                            <td>{programmer.name}</td>
                            <td>{programmer.age}</td>
                            <td>{programmer.essay}</td>
                            <td>{programmer.stack}</td>
                            <td><Button color="danger" onClick={() => this.deleteProgrammer(programmer.id)}>Delete Programmer</Button></td>
                        </tr>
                    )
                }))
                return display1

            case 'Python':
                const python = this.state.programmers.filter((programmers) => {
                    return this.state.stack === programmers.stack
                })

                const display2 = python.map(((programmer) => {
                    return (
                        <tr key={programmer.id}>
                            <td>{programmer.id}</td>
                            <td>{programmer.name}</td>
                            <td>{programmer.age}</td>
                            <td>{programmer.essay}</td>
                            <td>{programmer.stack}</td>
                            <td><Button color="danger" onClick={() => this.deleteProgrammer(programmer.id)}>Delete Programmer</Button></td>
                        </tr>
                    )
                }))
                return display2

            case 'Angular':
                const angular = this.state.programmers.filter((programmers) => {
                    return this.state.stack === programmers.stack
                })

                const display3 = angular.map(((programmer) => {
                    return (
                        <tr key={programmer.id}>
                            <td>{programmer.id}</td>
                            <td>{programmer.name}</td>
                            <td>{programmer.age}</td>
                            <td>{programmer.essay}</td>
                            <td>{programmer.stack}</td>
                            <td><Button color="danger" onClick={() => this.deleteProgrammer(programmer.id)}>Delete Programmer</Button></td>
                        </tr>
                    )
                }))
                return display3
            default:
                return <h5>No programmers for {this.state.stack}</h5>;
        }
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
                            <Input type="select" name="stack" value={this.state.stack} onChange={this.changeStack} required={true} >
                                <option value="Python">Python</option>
                                <option value="React">React</option>
                                <option value="Angular">Angular</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row className=" large">
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Essay</th>
                                    <th>Stack</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.show()}
                            </tbody>
                        </Table>
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

