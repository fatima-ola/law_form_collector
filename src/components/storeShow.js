import React, { Component } from 'react'
import UserForm from './userform';
import { Collapse, Table, Row, Col, Container, Button, Card, CardText } from 'reactstrap'
import Output from './output'
import SmallScreen from './smallScreen'

const smallbtn = {
    backgroundColor: 'red',
    width: '200px'
}

class StoreShow extends Component {
    state = {
        programmers: [
            { name: 'Sam', age: 25, essay: 'I am a developer', stack: 'react', id: 99 },
            { name: 'Brad', age: 23, essay: 'I love jsx', stack: 'php', id: 70 }
        ],
        isOpen: false
    }

    addProgrammer = (programmer) => {
        programmer.id = Math.floor(Math.random() * 100)
        let newProgrammerList = [...this.state.programmers, programmer]
        this.setState({
            programmers: newProgrammerList,
        })
    }

    deleteProgrammer = (id) => {
        const remainingProgrammer = this.state.programmers.filter((programmer) => {
            return programmer.id !== id
        })
        this.setState({
            programmers: remainingProgrammer
        })
    }

    toggle = () => {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }

    // smallScreen = () => {
    //     const data = this.state.programmers.map((programmer) => {
    //         return (
    //             <Col key={programmer.id} xs="12" sm='12' md='12'>
    //                 <Collapse isOpen={this.state.isOpen}>
    //                     <Card body>
    //                         <CardText>
    //                             id: {programmer.id} <br />
    //                             Name: {programmer.name} <br />
    //                            Age: {programmer.age} <br />
    //                            Stack: {programmer.stack} <br />
    //                            Essay: {programmer.essay} <br />
    //                         </CardText>
    //                         <Button color="danger" onClick={() => this.deleteProgrammer(programmer.id)} style={smallbtn}>Delete Programmer</Button>
    //                     </Card>
    //                 </Collapse>
    //             </Col>
    //         )

    //     })
    //     return data
    // }



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
                    <div >
                        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Tap to see programmer's details</Button>
                        <SmallScreen programmer={this.state.programmers} toggle={this.state.toggle} deleteProgrammer={this.deleteProgrammer} isOpen={this.isOpen} />
                    </div>
                </Container>
            </div>
        )
    }
}

export default StoreShow

