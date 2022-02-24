import React from 'react'
import { nanoid } from 'nanoid'

export default function Header(props) {
    const { addTodo } = props

    const handleKeyUp = (event) => {
        const { keyCode, target } = event

        if(keyCode !== 13){
            return
        }
        if(target.value === ''){
            return
        }
        const todo = {
            id: nanoid(),
            name: target.value,
            isDone: false
        }
        addTodo(todo)
        target.value = ''
        
    }

    return (
        <div className='headerDiv' >
            <input  onKeyUp={handleKeyUp}
                    type="text" 
                    className='headerInput' 
                    placeholder='输入任务，按回车键添加'/>
        </div>
    )
}
