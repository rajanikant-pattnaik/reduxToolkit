import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
 
const AddTodo = () => {

    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className="container mx-auto p-4">
      <form onSubmit={addTodoHandler} className="w-full max-w-lg">
        {/* Input field */}
        <div className="mb-4">
          <input
            type="text"
            id="inputField"
            name="inputField"
            value={input}
            onChange={handleChange}
            placeholder="Enter something..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo