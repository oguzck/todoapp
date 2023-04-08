import React from 'react'

export default function Header({ inputText, setInputText, todos, setTodos }) {

    const InputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random()
            }
        ]);
        setInputText("");


    }
    return (

        <header className="header">
            <h1>todos</h1>
            <form onSubmit={submitHandler}>
                <input value={inputText} onChange={InputTextHandler} className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>

    )
}
