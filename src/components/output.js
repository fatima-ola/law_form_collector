import React from 'react'
import { Button } from 'reactstrap'

function Output(props) {
    const { programmers, deleteProgrammer } = props

    const data = programmers.map((programmer) => {
        return (
            <tr key={programmer.id}>
                <td>{programmer.id}</td>
                <td>{programmer.name}</td>
                <td>{programmer.age}</td>
                <td>{programmer.essay}</td>
                <td>{programmer.stack}</td>
                <td><Button color="danger" onClick={() => deleteProgrammer(programmer.id)}>Delete Programmer</Button></td>
            </tr>
        )
    })



    return (
        <tbody>
            {data}
        </tbody>

    )

}

export default Output
