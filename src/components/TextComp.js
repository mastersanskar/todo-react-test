import React from 'react'
import './BaseComp.css'

function TextComp(props) {
    return (
        <div>
            <div className={`todo ${props.todo.complete ? 'done' : 'notDone'}`} onClick={props.toggleComplete}>
                {props.todo.text}
            </div>
            <button className='delete' onClick={props.onDelete}>x</button>
        </div>
    )
}

export default TextComp
