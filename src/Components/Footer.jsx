import { useRef } from "react"
import React from 'react'
export default function Footer({todos,setTodos,counter,status,setStatus}) {

    const disable = useRef(null)

    disable.current = todos.every((todo) => todo.completed === false);

    const clearCompleted = () => {
        const newTodos = todos.filter((pre) => pre.completed === false)
        setTodos(newTodos)
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{counter} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={status === "all" ? "selected" : ""}
                        onClick={() => {
                            setStatus("all");
                            console.log(status)
                        }}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="#/"
                        className={status === "active" ? "selected" : ""}
                        onClick={() => {
                            setStatus("active");
                            console.log(status)
                        }}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="#/"
                        className={status === "completed" ? "selected" : ""}
                        onClick={() => {
                            setStatus("completed");
                            console.log(status)
                        }}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {!disable.current && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>}
        </footer>

    )
}
