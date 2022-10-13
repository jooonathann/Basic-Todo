import React,{ Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

//delete function
    const deleteTodo = async(id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos = async() => {
        try {
            
            //by default FETCH make a GET request
            const response = await fetch('http://localhost:5000/todos')
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    },[])


    return (
        <Fragment>
              <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>

                {/*      <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr> */}
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>
                        {todo.description}
                    </td>
                    <td>
                        <EditTodo todo={todo} />
                    </td>
                    <td>
                        <button 
                        onClick={() => deleteTodo(todo.todo_id)}
                        className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </Fragment>
    )
};

export default ListTodos;