import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: '',
        age: null,
        essay: '',
        stack: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea placeholder="tell us about yourself" onChange={this.handleChange} />
                    </div>
                    <div>
                        <select onChange={this.handleChange}>
                            <option value="Python">Python</option>
                            <option value="React">React</option>
                            <option value="Anguilar">Anguilar</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
