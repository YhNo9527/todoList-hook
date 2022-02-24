import React from 'react'

export default function Footer(props) {
    const { todos, checkAll, clearBeDone } = props

    const total = todos.length

    const countIsDone = todos.reduce((pre, current) => {
        return current.isDone? pre + 1 : pre
    }, 0)   

    const allBeDone = (total === countIsDone && total !== 0? true : false)

    const handleChange = (event) => {
        checkAll(event.target.checked)
    }

    const handleClearBeDone = () => {
        if(window.confirm('确定要删除已完成的任务吗')){
            return clearBeDone()
        }else{
            return
        }
    }

    return (
        <div className='footerDiv' >
            <div>
                <input onChange={handleChange} type="checkbox" checked={allBeDone}/>
                <span>已完成 {countIsDone}</span>/
                <span>全部 {total} </span>
            </div>
            <button onClick={handleClearBeDone} className='delAllBtn'>删除已完成</button>
        </div>
    )
}
