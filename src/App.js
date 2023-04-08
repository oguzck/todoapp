import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState , useEffect } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  const [counter,setCounter] = useState(0)

  useEffect(() => {
    if (status === "active"){
      setFilterTodo(todos.filter((perTodo) => perTodo.completed === false));
    }
    else if (status === "completed")
      setFilterTodo(todos.filter((perTodo) => perTodo.completed === true));
    else setFilterTodo(todos);

    const myCounter = todos.filter((counterTodo) => counterTodo.completed === false)
    setCounter(myCounter.length)
  }, [todos, status]);

 
  return (
    <>
    <section className='todoapp'>
      <Header inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <Main filterTodo = {filterTodo} todos = {todos} setTodos ={setTodos} />
      <Footer setStatus={setStatus} counter={counter} status={status} todos={todos} setTodos={setTodos}/>
      </section>
    </>
  );
}

export default App;
