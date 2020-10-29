import React from 'react'
import { Button } from 'reactstrap'

function Output({ programmers, deleteProgrammer }) {

    const data = programmers.length ? (programmers.map((programmer) => {
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
    })) : (
            <tr>
                <td><h5>No Programmer signed up yet</h5></td>
            </tr>
        )

    return (
        <tbody>
            {data}
        </tbody>
    )
}

export default Output
