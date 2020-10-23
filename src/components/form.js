import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: '',
        age: null,
        essay: '',
        stack: 'React'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addProgrammer(this.state)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.handleChange} required={true} />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" onChange={this.handleChange} required={true} />
                    </div>
                    <div>
                        <textarea name="essay" placeholder="tell us about yourself" onChange={this.handleChange} required={true} />
                    </div>
                    <div>
                        <select type="select" name="stack" value={this.state.stack} onChange={this.handleChange} required={true}>
                            <option value="Python">Python</option>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
