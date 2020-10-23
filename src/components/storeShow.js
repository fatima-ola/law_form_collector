import React, { Component } from 'react'
import Form from './form';

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

    addProgrammer = (programmer) => {
        programmer.id = Math.floor(Math.random() * 100)
        let newProgrammerList = [...this.state.programmers, programmer]
        this.setState({
            programmers: newProgrammerList,
        })
    }

    render() {
        return (
            <div>
                <Form addProgrammer={this.addProgrammer} />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Essay</th>
                            <th>Stack</th>
                        </tr>
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
