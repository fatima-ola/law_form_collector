import React from 'react'
import { Collapse, Col, Button, Card, CardText } from 'reactstrap'

const smallbtn = {
    backgroundColor: 'red',
    width: '200px'
}

function SmallScreen(props) {
    const { programmers, toggle, deleteProgrammer, isOpen } = props

    const x = programmers.map((programmer) => {
        return (
            <Col key={programmer.id} xs="12" sm='12' md='12'>
                <Collapse isOpen={isOpen}>
                    <Card body>
                        <CardText>
                            id: {programmer.id} <br />
                            Name: {programmer.name} <br />
                           Age: {programmer.age} <br />
                           Stack: {programmer.stack} <br />
                           Essay: {programmer.essay} <br />
                        </CardText>
                        <Button color="danger" onClick={() => deleteProgrammer(programmer.id)} style={smallbtn}>Delete Programmer</Button>
                    </Card>
                </Collapse>
            </Col>
        )

    })

    return (
        <div>
            {x}
        </div>
    )
}

export default SmallScreen
