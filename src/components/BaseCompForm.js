import React, { Component } from 'react'
import shortid from 'shortid'

class BaseCompForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({text: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="todo..."
                />
            </form>
        )
    }
}

export default BaseCompForm
