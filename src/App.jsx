import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import './App.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [todo,setTodo] = useState("")
    const [todos,setTodos] = useState([])

useEffect(()=>{
    let data = localStorage.getItem("todos")
    if(data){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)}
},[])
const saveToLS = (params) =>{
    localStorage.setItem("todos",JSON.stringify(todos))
}
const handleChange = (e) =>{

setTodo(e.target.value)
}
const handleEdit = (e,id) =>{
const t= todos.filter(item => item.id===id)
setTodo(t[0].todo)
let newTodos = todos.filter(item=>{
     return item.id !== id
     })
     setTodos(newTodos)
     saveToLS()
}

const handleDelete = (todo,id) =>{
const confirmDelete = window.confirm(`Are you sure you want to delete "${todo.todo}" ??`);
if (confirmDelete){
let newTodos = todos.filter(item=>{
    return item.id !== id
})
setTodos(newTodos)}
saveToLS()
}
const handleAdd = () =>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
    saveToLS()
}
const handleCheckbox = (e)=>{
let id = e.target.name
let index = todos.findIndex(item=>{
    return item.id === id
})
let newTodos = [...todos]
newTodos[index].isCompleted = !newTodos[index].isCompleted
setTodos(newTodos)
saveToLS()
}

return(
    <>
  <Navbar />

  <div className="min-h-screen bg-gray-200 py-10 px-4">
    <div className="max-w-2xl mx-auto">

      {/* Add Todo Card */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">Add a Todo</h2>

        <div className="flex gap-3">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>


      {/* Todos Heading */}
      <h1 className="text-2xl font-semibold mb-4">Your Todos</h1>

      {/* Todos Container */}
      <div className="space-y-3">
        {todos.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            You don't have any todos to show
          </div>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white shadow-sm rounded-xl p-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <input
                name={todo.id}
                type="checkbox"
                checked={todo.isCompleted}
                onChange={handleCheckbox}
                className="h-4 w-4"
              />

              <span
                className={todo.isCompleted ? "line-through text-gray-500" : ""}
              >
                {todo.todo}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={(e) => handleEdit(e, todo.id)}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(todo, todo.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>
)
};

export default App;
