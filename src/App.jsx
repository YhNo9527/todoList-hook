import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List/List'

export default function App() {

    let [todos, setTodos] = useState(
        [
            {id:'001', name:'吃饭', isDone:true},
            {id:'002', name:'睡觉', isDone:true},
            {id:'003', name:'喝水', isDone:false}
        ]
    )

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    const checkAll = (allChecked) => {
        const newTodos = todos.map((todo) => {
            return {...todo, isDone: allChecked}
        })

        setTodos(todos = newTodos)
    }

    const clearBeDone = () => {
        const newTodos = todos.filter((todo) => {
            return !todo.isDone
        })
        setTodos(todos = newTodos)
    }

    const updataTodo = (id, isDone) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, isDone}
            }else{
                return {...todo}
            }
        })

        setTodos(todos = newTodos)
    }

    const delTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })

        setTodos(todos = newTodos)
    }

    return (
        <div className='mainDiv' >
            <Header addTodo={addTodo}/>
            <List todos={todos} updataTodo= {updataTodo} delTodo={delTodo} />
            <Footer todos={todos} checkAll= {checkAll} clearBeDone= {clearBeDone} />
        </div>
    )
}




