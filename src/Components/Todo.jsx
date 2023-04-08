import React from 'react'

export default function Todo({ text, todos , setTodos , todo}) {
    const deleteHandler = () =>{
        setTodos(todos.filter(x=>x.id !== todo.id))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
            return{
                ...item,completed : !item.completed
            }}
            return item;
        }))
    }
    return (
        <li className={todo.completed ? 'completed' : 'li'}>
            <div className="view">
                <input onClick={completeHandler} className="toggle" type="checkbox" />
                <label>{text}</label>
                <button onClick={deleteHandler} className="destroy"></button>
            </div>
        </li>
    )
}
