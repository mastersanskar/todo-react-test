import React, { Component } from 'react'
import BaseCompForm from './BaseCompForm'
import TextComp from './TextComp'

class BaseComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            toShowTodos: "all"
        }
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            }))
        })
    }

    updateToShowTodos = (s) => {
        this.setState({
            toShowTodos: s
        })
    } 

    doTheDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    } 

    render() {

        let todos = []
        if (this.state.toShowTodos === 'all'){
            todos = this.state.todos
        } else if (this.state.toShowTodos === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete)
        } else if (this.state.toShowTodos === 'incomplete') {
            todos = this.state.todos.filter(todo => !todo.complete)
        }
        
        return (
            <div>
                <BaseCompForm onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <TextComp key={todo.id} onDelete={() => this.doTheDelete(todo.id)} todo={todo} toggleComplete={() => this.toggleComplete(todo.id)}/>
                ))}
            <p>todos left: {this.state.todos.filter(todo => !todo.complete).length}</p>
            <div>
                <button onClick={() => this.updateToShowTodos('all')}>Show All</button>
                <button onClick={() => this.updateToShowTodos('complete')}>Show Done</button>
                <button onClick={() => this.updateToShowTodos('incomplete')}>Show Not Done</button>
                </div>
            </div>
        )
    }
}

export default BaseComp
