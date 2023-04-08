import React, { useState } from 'react'
import Todo from './Todo'

export default function Main({filterTodo, todos, setTodos }) {
    return (
        <section className="main">
            <ul className="todo-list">
                {filterTodo.map((todo)=>(
                    <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo = {todo}/>
                ))}
            </ul>
        </section>
    )
}
