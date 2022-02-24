import React, { useState } from 'react'

export default function Item(props) {

    let [mouseEnter, setMouseEnter] = useState(false)
    const {id, isDone, name, updataTodo, delTodo} = props

    const handleMouseEnter = (isTrue) => {
        return (() => {
            setMouseEnter(mouseEnter = isTrue)
        })
    }

    const handleChange = (id) => {
        return ((event) => {
            const { checked } = event.target
            updataTodo(id, checked)
        })
    }
    const handleClick = (id) => {
        return (
            () => {
                if(window.confirm('确定当前任务吗')){
                    delTodo(id)
                }else{
                    return
                }
            }
        )
    }

    return (
        <div className='itemDiv' 
            onMouseEnter={handleMouseEnter(true)} 
            onMouseLeave={handleMouseEnter(false)}
            style={{borderBottom: mouseEnter? 'solid' : ''}}>
            <span>
                <input type="checkbox"
                        onChange={handleChange(id)}
                        checked={isDone} />{name}
            </span>
            <button style={{display: mouseEnter? 'block': 'none'}}
                    onClick={handleClick(id)}
                    className='delBtn'>删除</button>
        </div>
    )
}
