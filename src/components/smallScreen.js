import React, { useState } from 'react'
import { Collapse, Col, Button, Card, CardText } from 'reactstrap'


const smallbtn = {
    backgroundColor: 'red',
    width: '200px'
}

function SmallScreen(programmers, deleteProgrammer) {

    const initState = {
        isOpen: true
    }

    const [state, setState] = useState(initState)

    const toggle = () => {
        setState({
            ...state,
            isOpen: !state.isOpen
        })
    }

    const data = () => {
        if (programmers.length) {
            const show = programmers.map((programmer) => {
                return (
                    <Col key={programmer.id} xs="12" sm='12' md='12'>
                        <Collapse isOpen={state.isOpen}>
                            <Card body>
                                <CardText>
                                    id {programmer.id}
                                    <br />
                                    Name: {programmer.name}
                                    <br />
                            age: {programmer.age}
                                    <br />
                            Stack:{programmer.stack}
                                    <br />
                            Essay: {programmer.essay}
                                    <br />
                                </CardText>
                                <Button onClick={() => deleteProgrammer(programmer.id)} style={smallbtn}>Delete Programmer</Button>
                            </Card>
                        </Collapse>
                    </Col>
                )
            })
            return show
        } else {
            return (
                <div>
                    <p>No programmers Signed up yet</p>
                </div>)
        }
    }

    return (
        <div className='row container small'>
            <Button color='primary' block onClick={toggle}>Tap to see Programmers that signed up</Button>
            {data()}
        </div>
    )
}

export default SmallScreen



