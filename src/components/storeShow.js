import React, { Component } from 'react'

class StoreShow extends Component {
    state = {
        programmers: [
            { name: 'Sam', age: 25, essay: 'I am a developer', stack: 'react', id: 101 },
            { name: 'Brad', age: 23, essay: 'I love jsx', stack: 'php', id: 100 }
        ]
    }

    output = () => {
        const x = this.state.programmers.map((programmer) => {
            return (
                <tr key={programmer.id}>
                    <td>{programmer.name}</td>
                    <td>{programmer.age}</td>
                    <td>{programmer.essay}</td>
                    <td>{programmer.stack}</td>
                </tr>
            )
        })

        return x
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Essay</td>
                            <td>Stack</td>
                        </th>
                    </thead>
                    <tbody>
                        {this.output()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StoreShow
