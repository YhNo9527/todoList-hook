import React from 'react'

import Item from './Item' 

export default function List(props) {
    const {todos, updataTodo, delTodo} = props
    return (
        <div className='listDiv'>
            {
                todos.map((todo) => {
                    return (
                        <Item key= {todo.id} {...todo} updataTodo= {updataTodo} delTodo= {delTodo} />
                    )
                })
            }
        </div>
    )
}

